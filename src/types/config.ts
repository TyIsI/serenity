import { z } from 'zod'

export const zBackendConfigUnsplash = z.object({
    accessKey: z.string(),
    secretKey: z.string(),
    cacheTime: z.number(),
    collectionId: z.string()
})

export const zBackendConfigWeatherAPI = z.object({
    key: z.string(),
    cache: z.object({
        time: z.number(),
        interval: z.number()
    })
})

export const zBackendConfig = z.object({
    unsplash: zBackendConfigUnsplash,
    weatherApi: zBackendConfigWeatherAPI
})

export type TBackendConfigUnsplash = z.infer<typeof zBackendConfigUnsplash>
export type TBackendConfigWeatherAPI = z.infer<typeof zBackendConfigWeatherAPI>
export type TBackendConfig = z.infer<typeof zBackendConfig>

export const zFrontendConfig = z.object({
    backgroundUpdateInterval: z.number(),
    quoteUpdateInterval: z.number()
})

export type TFrontendConfig = z.infer<typeof zFrontendConfig>
