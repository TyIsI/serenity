import { z } from 'zod'

export const zCoords = z.object({
    latitude: z.number(),
    longitude: z.number()
})

export const zLocation = z.object({
    name: z.string(),
    region: z.string(),
    country: z.string(),
    lat: z.number(),
    lon: z.number(),
    tz_id: z.string(),
    localtime_epoch: z.number(),
    localtime: z.string()
})

export const zCondition = z.object({
    text: z.string(),
    icon: z.string(),
    code: z.number()
})

export const zCurrent = z.object({
    last_updated_epoch: z.number(),
    last_updated: z.string(),
    temp_c: z.number(),
    temp_f: z.number(),
    is_day: z.number(),
    condition: zCondition,
    wind_mph: z.number(),
    wind_kph: z.number(),
    wind_degree: z.number(),
    wind_dir: z.string(),
    pressure_mb: z.number(),
    pressure_in: z.number(),
    precip_mm: z.number(),
    precip_in: z.number(),
    humidity: z.number(),
    cloud: z.number(),
    feelslike_c: z.number(),
    feelslike_f: z.number(),
    vis_km: z.number(),
    vis_miles: z.number(),
    uv: z.number(),
    gust_mph: z.number(),
    gust_kph: z.number()
})

export const zWeather = z.object({
    location: zLocation,
    current: zCurrent
})

export const zWeatherCacheEntry = z.object({
    ts: z.number(),
    weather: zWeather,
    expiryTime: z.number(),
    instanceId: z.string().optional()
})

export const zWeatherCache = z.record(z.string(), zWeatherCacheEntry)

export const zIWeatherBackendService = z.object({
    fetchWeather: z.function().args(z.string()).returns(zWeather.optional().promise()),
    getWeather: z.function().args(zCoords).returns(zWeatherCacheEntry.promise()),
    maintenance: z.function().returns(z.void()),
    start: z.function().returns(z.void()),
    stop: z.function().returns(z.void())
})

export const zWeatherInfo = z.object({
    location: zLocation.pick({ name: true }),
    current: zCurrent.pick({ temp_c: true, temp_f: true, condition: true })
})

export const zWeatherObject = z.object({
    weather: zWeatherInfo
})

export type Coords = z.infer<typeof zCoords>
export type Location = z.infer<typeof zLocation>
export type Condition = z.infer<typeof zCondition>
export type Current = z.infer<typeof zCurrent>
export type Weather = z.infer<typeof zWeather>
export type WeatherCacheEntry = z.infer<typeof zWeatherCacheEntry>
export type WeatherCache = z.infer<typeof zWeatherCache>
export type IWeatherBackendService = z.infer<typeof zIWeatherBackendService>
export type WeatherInfo = z.infer<typeof zWeatherInfo>
export type WeatherObject = z.infer<typeof zWeatherObject>
