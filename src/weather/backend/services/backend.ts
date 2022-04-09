import config from '../../../config/backend/config'

import fetch from 'node-fetch'

import { iWeatherBackendService, Weather, WeatherCache, WeatherCacheEntry } from 'src/weather/types/weather'

class WeatherBackendServiceImpl implements iWeatherBackendService {
  cache: WeatherCache
  intervalId: any

  constructor () {
    this.cache = {}
  }

  async fetchWeather (cacheKey: string): Promise<Weather | undefined | unknown> {
    const url = `https://api.weatherapi.com/v1/current.json?key=${config.weather_api.key}&q=${cacheKey}`

    const response = await fetch(url)

    return await response.json()
  }

  async getWeather (coords: { latitude: number, longitude: number }): Promise<WeatherCacheEntry> {
    const lat = parseFloat(coords.latitude.toFixed(3))
    const lng = parseFloat(coords.longitude.toFixed(3))
    const cacheKey = lat + ',' + lng

    if (this.cache[cacheKey] === undefined || this.cache[cacheKey] === null || this.cache[cacheKey].expiry_time < Date.now() || this.cache[cacheKey].weather == null) {
      const weather = await this.fetchWeather(cacheKey)

      const cacheEntry:WeatherCacheEntry = {
        ts: Date.now(),
        weather,
        expiry_time: (Date.now() + (config.weather_api.cache_time * 1000))
      }

      this.cache[cacheKey] = cacheEntry
    }

    return this.cache[cacheKey]
  }

  maintenance () {
    for (const key in this.cache) {
      if (this.cache[key].expiry_time < Date.now()) {
        delete this.cache[key]
      }
    }
  }

  start () {
    this.intervalId = setInterval(this.maintenance, (60 / 50) * 60 * 1000)
  }

  stop () {
    clearInterval(this.intervalId)
  }
}

const weatherBackendService = new WeatherBackendServiceImpl()

weatherBackendService.start()

export default weatherBackendService
