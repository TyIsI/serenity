export interface Coords {
  latitude: number,
  longitude: number
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Weather {
  location: Location;
  current: Current;
}

export interface WeatherCacheEntry {
  ts: number;
  weather: Weather | undefined | unknown;
  expiry_time: number;
  instanceId?: string;
}

export interface WeatherCache {
  [key: string]: WeatherCacheEntry;
}

export interface iWeatherBackendService {
}

export interface WeatherObject { weather: { location: { name: '' }, current: { temp_c: 0, temp_f: 0, condition: { text: '', icon: '' } } } }
