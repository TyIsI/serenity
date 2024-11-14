import type { Debugger } from 'debug'

import GlobalInstanceManagerInstance from '@/lib/global-instance-manager'
import { getDebugger, getRandomId, normalizeTime } from '@/lib/util'

import type { IWeatherBackendService, Weather, WeatherCache, WeatherCacheEntry } from '@/types/weather'

import { backendConfig } from '@/config/backend'

class WeatherBackendServiceImpl implements IWeatherBackendService {
    cache: WeatherCache = {}
    intervalId: NodeJS.Timer | undefined
    started = false
    instanceId: string = getRandomId()
    debug: Debugger = getDebugger('unsplash-backend').extend(this.instanceId)

    constructor() {
        this.debug('Creating backend service')

        this.cache = {}
    }

    async fetchWeather(cacheKey: string): Promise<Weather | undefined> {
        this.debug('Fetching weather for ' + cacheKey)

        const url = `https://api.weatherapi.com/v1/current.json?key=${backendConfig.weatherApi.key}&q=${cacheKey}`

        const response = await fetch(url)

        return (await response.json()) as Weather
    }

    async getWeather(coords: { latitude: number; longitude: number }): Promise<WeatherCacheEntry> {
        this.debug(`Getting weather for ${coords.latitude},${coords.longitude}`)

        const lat = parseFloat(coords.latitude.toFixed(2))
        const lng = parseFloat(coords.longitude.toFixed(2))
        const cacheKey = `${lat},${lng}`

        if (
            !(cacheKey in this.cache) ||
            typeof this.cache[cacheKey] === 'undefined' ||
            this.cache[cacheKey].expiryTime < Date.now() ||
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            this.cache[cacheKey].weather == null
        ) {
            this.debug('Fetching weather for ' + cacheKey)

            const weather = await this.fetchWeather(cacheKey)

            if (weather != null) {
                const cacheEntry: WeatherCacheEntry = {
                    ...this.cache[cacheKey],
                    ts: Date.now(),
                    weather,
                    expiryTime: Date.now() + normalizeTime(backendConfig.weatherApi.cache.time)
                }

                this.cache[cacheKey] = cacheEntry
            } else {
                this.debug(`Received null weather for cacheKey: [${cacheKey}]`)
            }
        }

        return this.cache[cacheKey]
    }

    maintenance(): void {
        this.debug('Maintenance')

        for (const key in this.cache) {
            if (this.cache[key].expiryTime < Date.now()) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete this.cache[key]
            }
        }
    }

    start(): void {
        this.debug('Starting backend service')

        if (this.started) return

        if (this.intervalId != null) this.stop()

        this.intervalId = setInterval(() => {
            this.maintenance()
        }, 60000)
        this.started = true
    }

    stop(): void {
        this.debug('Stopping backend service')

        // @ts-expect-error type mismatch
        if (this.intervalId != null) clearInterval(this.intervalId)
        this.started = false
    }
}

const getInstance = (): WeatherBackendServiceImpl => {
    let weatherBackendServiceInstance = GlobalInstanceManagerInstance.getInstance('WeatherBackendService') as WeatherBackendServiceImpl | null

    if (weatherBackendServiceInstance == null) {
        weatherBackendServiceInstance = new WeatherBackendServiceImpl()
        GlobalInstanceManagerInstance.saveInstance('WeatherBackendService', weatherBackendServiceInstance)
    }

    weatherBackendServiceInstance.start()

    return weatherBackendServiceInstance
}

export default getInstance()
