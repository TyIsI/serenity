import { z } from 'zod'

import { zUnsplashCollectionPhoto } from './unsplash'

export const zAPIUnsplashResponseData = z.object({
    ts: z.number(),
    photo: zUnsplashCollectionPhoto,
    instanceId: z.string()
})

export type APIUnsplashResponseData = z.infer<typeof zAPIUnsplashResponseData>

export interface DataWrapper<T> {
    data: T
}

export interface RequestError<M = 'Unknown error'> {
    result: 'ERROR'
    message: M
}
