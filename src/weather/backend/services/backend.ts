import config from '../../../config/backend/config'

import fetch from 'node-fetch'

import GlobalInstanceManagerInstance from 'src/lib/global-instance-manager'

import { iWeatherBackendService, Weather, WeatherCache, WeatherCacheEntry } from 'types/weather'
import { getDebugger, getRandomId } from 'src/lib/util'

class WeatherBackendServiceImpl implements iWeatherBackendService {
  cache: WeatherCache = {}
  intervalId: any = null
  started: boolean = false
  instanceId: string = getRandomId()
  debug: any = getDebugger('unsplash-backend').extend(this.instanceId)

  constructor () {
    this.debug('Creating backend service')

    this.cache = {}
  }

  async fetchWeather (cacheKey: string): Promise<Weather | undefined | unknown> {
    this.debug('Fetching weather for ' + cacheKey)

    const url = `https://api.weatherapi.com/v1/current.json?key=${config.weather_api.key}&q=${cacheKey}`

    const response = await fetch(url)

    return await response.json()
  }

  async getWeather (coords: { latitude: number, longitude: number }): Promise<WeatherCacheEntry> {
    this.debug('Getting weather for ' + coords.latitude + ',' + coords.longitude)

    const lat = parseFloat(coords.latitude.toFixed(2))
    const lng = parseFloat(coords.longitude.toFixed(2))
    const cacheKey = lat + ',' + lng

    if (this.cache[cacheKey] === undefined || this.cache[cacheKey] === null || this.cache[cacheKey].expiry_time < Date.now() || this.cache[cacheKey].weather == null) {
      this.debug('Fetching weather for ' + cacheKey)

      const weather = await this.fetchWeather(cacheKey)

      const cacheEntry: WeatherCacheEntry = {
        ts: Date.now(),
        weather,
        expiry_time: (Date.now() + (config.weather_api.cache.time * 1000))
      }

      this.cache[cacheKey] = cacheEntry
    }

    return this.cache[cacheKey]
  }

  maintenance () {
    this.debug('Maintenance')

    for (const key in this.cache) {
      if (this.cache[key].expiry_time < Date.now()) {
        delete this.cache[key]
      }
    }
  }

  start () {
    this.debug('Starting backend service')

    if (this.started) return

    this.intervalId = setInterval(() => this.maintenance(), 60000)
    this.started = true
  }

  stop () {
    this.debug('Stopping backend service')

    clearInterval(this.intervalId)
    this.started = false
  }
}

const weatherBackendService = GlobalInstanceManagerInstance.getInstance(WeatherBackendServiceImpl)

weatherBackendService.start()

export default weatherBackendService
