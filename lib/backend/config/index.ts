import { IConfig } from 'types/config'

const config: IConfig = {
  unsplash: {
    access_key: process.env.UNSPLASH_ACCESS_KEY || '',
    secret_key: process.env.UNSPLASH_SECRET_KEY || '',
    cache_time: process.env.UNSPLASH_CACHE_TIME != null ? parseInt(process.env.UNSPLASH_CACHE_TIME) : 3600,
    collection_id: process.env.UNSPLASH_COLLECTION_IDS || ''
  }
}

export default config
