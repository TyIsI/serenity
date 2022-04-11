import { Random as UnsplashRandomPhoto } from 'unsplash-js/dist/methods/photos/types'

import { Dispatch, SetStateAction } from 'react'
import stateMachine from 'pretty-state-machine'

import PhotoTemplate from 'src/unsplash/util/PhotoTemplate'

type IMG = HTMLImageElement | HTMLElement | null

class FrontendService {
  intervalId: any
  photo: UnsplashRandomPhoto
  photoHandler?: Dispatch<SetStateAction<UnsplashRandomPhoto>>

  constructor () {
    this.intervalId = 0
    this.photo = stateMachine.get('photo', PhotoTemplate)

    this.start()
  }

  getPreloadElement (): IMG {
    if (document.getElementById('preload') === null) {
      const preloadElement = document.createElement('img')
      preloadElement.setAttribute('id', 'preload')
      document.body.appendChild(preloadElement)
    }

    return document.getElementById('preload')
  }

  preload () {
    if (document !== undefined) {
      document.getElementsByTagName('html')[0].style.backgroundImage = 'url(' + this.photo.urls.full + ')'

      if (this.photoHandler != null) this.photoHandler(this.photo)
    }
  }

  async getPhoto () {
    const result = await fetch('/api/unsplash')
    const data = await result.json()

    stateMachine.pub({ photo: data.photo })

    const preloadElement:IMG = this.getPreloadElement()

    if (preloadElement !== null) {
      // @ts-ignore
      preloadElement.src = data.photo.urls.full

      preloadElement.onload = () => {
        document.getElementsByTagName('html')[0].style.backgroundImage = 'url(' + data.photo.urls.full + ')'

        if (this.photoHandler != null) this.photoHandler(data.photo)

        preloadElement.remove()
      }
    }
  }

  setHandler (setPhoto: Dispatch<SetStateAction<UnsplashRandomPhoto>>) {
    this.photoHandler = setPhoto
  }

  start () {
    if (this.intervalId !== 0) return

    if (typeof window !== 'undefined') { this.preload() }

    this.getPhoto()
    this.intervalId = setInterval(this.getPhoto.bind(this), 5 * 60 * 1000)
  }

  stop () {
    clearInterval(this.intervalId)
  }
}

const instance = new FrontendService()

export default instance
export { FrontendService as PhotoService }
