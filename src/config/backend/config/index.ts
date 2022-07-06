import { IConfig } from 'src/types/config'

const config: IConfig = {
  unsplash: {
    access_key: process.env.UNSPLASH_ACCESS_KEY || '',
    secret_key: process.env.UNSPLASH_SECRET_KEY || '',
    cache_time: process.env.UNSPLASH_CACHE_TIME != null ? parseInt(process.env.UNSPLASH_CACHE_TIME) : 3600,
    collection_id: process.env.UNSPLASH_COLLECTION_IDS || ''
  },
  weather_api: {
    key: process.env.WEATHER_API_KEY || '',
    cache: {
      time: process.env.WEATHER_CACHE_TIME != null ? parseInt(process.env.WEATHER_CACHE_TIME) : 3600,
      interval: process.env.WEATHER_CACHE_INTERVAL != null ? parseInt(process.env.WEATHER_CACHE_INTERVAL) : 60000
    }
  }
}

export default config
