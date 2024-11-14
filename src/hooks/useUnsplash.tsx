'use client'

import { useEffect, useState } from 'react'

import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'

import type { APIUnsplashResponseData } from '@/types/api'
import type { UnsplashCollectionPhoto } from '@/types/unsplash'

import { frontendConfig } from '@/config/frontend'
import { PhotoTemplate } from '@/unsplash/util/PhotoTemplate'

export const useUnsplash = (): UnsplashCollectionPhoto => {
    const [photo, setPhoto] = useState<UnsplashCollectionPhoto>(PhotoTemplate)

    const {
        data: apiData,
        isLoading: isApiLoading,
        isValidating: isApiValidating
        // @ts-expect-error mismatch
    } = useSWR<APIUnsplashResponseData>('/api/unsplash', fetcher, { refreshInterval: frontendConfig.backgroundUpdateInterval })

    useEffect(() => {
        if (!isApiLoading && !isApiValidating && apiData != null && apiData.photo !== photo) {
            setPhoto(apiData.photo)
        }
    }, [apiData, isApiLoading, isApiValidating])

    return photo
}
