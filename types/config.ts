export interface IConfigUnsplash {
  access_key: string;
  secret_key: string;
  cache_time: number;
  collection_id: string;
}

export interface IConfigWeatherAPI {
  key: string;
  cache_time: number;
}

export interface IConfig {
  unsplash: IConfigUnsplash;
  weather_api: IConfigWeatherAPI;
}
