import config from '../../../config/backend/config'

import { createApi } from 'unsplash-js'
import * as nodeFetch from 'node-fetch'

import GlobalInstanceManagerInstance from 'src/lib/global-instance-manager'

import PhotoTemplate from 'src/unsplash/util/PhotoTemplate'

import { ApiResponse as UnsplashApiResponse } from 'unsplash-js/dist/helpers/response'
import { Random as UnsplashRandomPhoto } from 'unsplash-js/dist/methods/photos/types'
import { getDebugger, getRandomId } from 'src/lib/util'

if (globalThis.fetch == null) {
  // @ts-ignore
  globalThis.fetch = nodeFetch.default
}

class BackendService {
  unsplash: any
  photoExpiryTime: number
  cachedPhoto: any
  intervalId: any
  started: boolean = false
  instanceId: string = getRandomId()
  debug: any = getDebugger('unsplash-backend').extend(this.instanceId)

  constructor () {
    this.debug('Creating backend service')

    this.unsplash = createApi({
      accessKey: config.unsplash.access_key
    })

    this.photoExpiryTime = 0
    this.cachedPhoto = PhotoTemplate
  }

  async getRandomPhoto () {
    this.debug('Getting random photo')

    await this.refreshPhoto()

    return this.cachedPhoto
  }

  async refreshPhoto () {
    this.debug('Refreshing photo')

    if (this.cachedPhoto === null || Date.now() > this.photoExpiryTime) {
      this.debug('Getting new photo')

      const photoResult: UnsplashApiResponse<UnsplashRandomPhoto | UnsplashRandomPhoto[]> = await this.unsplash.photos.getRandom({
        orientation: 'landscape',
        collectionIds: [config.unsplash.collection_id],
        query: 'orientation=landscape',
        count: 1
      })

      this.photoExpiryTime = Date.now() + (config.unsplash.cache_time * 1000 * 60)

      if (photoResult.type !== 'success') {
        this.debug('Failed to get photo')
        throw new Error('Unable to get photo from Unsplash')
      }

      this.cachedPhoto = Array.isArray(photoResult.response) ? photoResult.response[0] : photoResult.response
    }
  }

  start () {
    this.debug('Starting backend service')

    if (this.started) return
    this.intervalId = setInterval(() => this.refreshPhoto(), (60 / 50) * 60 * 1000)
    this.started = true
  }

  stop () {
    this.debug('Stopping backend service')

    clearInterval(this.intervalId)
    this.started = false
  }
}

const unsplashBackendService = GlobalInstanceManagerInstance.getInstance(BackendService)

unsplashBackendService.start()

export default unsplashBackendService
