import config from '../../../config/backend/config'

import { createApi } from 'unsplash-js'
import * as nodeFetch from 'node-fetch'

import { ApiResponse as UnsplashApiResponse } from 'unsplash-js/dist/helpers/response'
import { Random as UnsplashRandomPhoto } from 'unsplash-js/dist/methods/photos/types'
import PhotoTemplate from 'src/unsplash/util/PhotoTemplate'

if (global.fetch == null) {
  // @ts-ignore
  global.fetch = nodeFetch.default
}

class BackendService {
  unsplash: any
  photoExpiryTime: number
  cachedPhoto: any
  intervalId: any

  constructor () {
    this.unsplash = createApi({
      accessKey: config.unsplash.access_key
    })

    this.photoExpiryTime = 0
    this.cachedPhoto = PhotoTemplate
  }

  async getRandomPhoto () {
    await this.refreshPhoto()

    return this.cachedPhoto
  }

  async refreshPhoto () {
    if (this.cachedPhoto === null || Date.now() > this.photoExpiryTime) {
      const photoResult: UnsplashApiResponse<UnsplashRandomPhoto | UnsplashRandomPhoto[]> = await this.unsplash.photos.getRandom({
        orientation: 'landscape',
        collectionIds: [config.unsplash.collection_id],
        query: 'orientation=landscape',
        count: 1
      })

      this.photoExpiryTime = Date.now() + (config.unsplash.cache_time * 1000 * 60)

      if (photoResult.type !== 'success') {
        throw new Error('Unable to get photo from Unsplash')
      }

      this.cachedPhoto = Array.isArray(photoResult.response) ? photoResult.response[0] : photoResult.response
    }
  }

  start () {
    this.intervalId = setInterval(this.refreshPhoto, (60 / 50) * 60 * 1000)
  }

  stop () {
    clearInterval(this.intervalId)
  }
}

const unsplashBackendService = new BackendService()

unsplashBackendService.start()

export default unsplashBackendService
