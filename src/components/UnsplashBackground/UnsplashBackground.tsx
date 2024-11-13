'use client'

import { useEffect, useMemo, useState, type FC } from 'react'

import type { UnsplashBackgroundProps } from './UnsplashBackground.types'

import type { UnsplashCollectionPhoto } from '@/types/unsplash'

import { useUnsplash } from '@/hooks/useUnsplash'

export const UnsplashBackground: FC<UnsplashBackgroundProps> = ({ children }) => {
    const photo = useUnsplash()
    const [oldPhoto, setOldPhoto] = useState<UnsplashCollectionPhoto>(photo)

    useEffect(() => {
        if (oldPhoto.urls.full !== photo.urls.full) setOldPhoto(photo)
    }, [photo])

    const urlSet = useMemo(() => {
        return [photo.urls.full, photo.urls.regular, oldPhoto.urls.full, oldPhoto.urls.regular].filter((e) => Boolean(e) && e !== '').map((e) => `url(${e})`)
    }, [photo, oldPhoto])

    console.log('Running UnsplashBackground')

    return (
        <>
            <div
                className='absolute bottom-0 left-0 right-0 top-0 bg-gray-200 bg-fallback bg-cover bg-fixed text-white'
                data-testid='UnsplashBackground'
                style={{ backgroundImage: urlSet.join(', ') }}>
                <div className='relative h-full w-full'>{children}</div>
            </div>
        </>
    )
}

export default UnsplashBackground
