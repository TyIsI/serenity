import { Random as UnsplashRandomPhoto } from 'unsplash-js/dist/methods/photos/types'

import PhotoTemplate from 'lib/unsplash/templates/PhotoTemplate'
import { Dispatch, SetStateAction } from 'react'

class FrontendService {
  intervalId: any
  photo: UnsplashRandomPhoto
  photoHandler?: Dispatch<SetStateAction<UnsplashRandomPhoto>>

  constructor () {
    this.intervalId = 0
    this.photo = PhotoTemplate

    this.start()
  }

  async getPhoto () {
    const result = await fetch('/api/unsplash')
    const data = await result.json()

    document.getElementsByTagName('html')[0].style.backgroundImage = 'url(' + data.photo.urls.full + ')'

    if (this.photoHandler != null) this.photoHandler(data.photo)
  }

  setHandler (setPhoto: Dispatch<SetStateAction<UnsplashRandomPhoto>>) {
    this.photoHandler = setPhoto
  }

  start () {
    if (this.intervalId !== 0) return

    this.getPhoto()
    this.intervalId = setInterval(this.getPhoto, 5 * 60 * 1000)
  }

  stop () {
    clearInterval(this.intervalId)
  }
}

const instance = new FrontendService()

export default instance
export { FrontendService as PhotoService }
