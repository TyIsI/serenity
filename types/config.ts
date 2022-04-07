export interface IConfigUnsplash {
  access_key: string;
  secret_key: string;
  cache_time: number;
  collection_id: string;
}

export interface IConfig {
  unsplash: IConfigUnsplash;
}
