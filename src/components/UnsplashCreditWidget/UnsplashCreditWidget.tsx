'use client'

import type { FC } from 'react'

import type { UnsplashCreditWidgetProps } from './UnsplashCreditWidget.types'

import { BottomTextLabel } from '@/components/BottomTextLabel/BottomTextLabel'

import { useUnsplash } from '@/hooks/useUnsplash'

export const UnsplashCreditWidget: FC<UnsplashCreditWidgetProps> = () => {
    const photo = useUnsplash()

    return (
        <BottomTextLabel>
            <a href={photo.links.html + '?utm_source=Serenity&utm_medium=referral'} className='text-blue-500'>
                Photo
            </a>{' '}
            by{' '}
            <a href={photo.user.links.html + '?utm_source=Serenity&utm_medium=referral'} className='text-blue-500'>
                {photo.user.first_name} {photo.user.last_name}
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/?utm_source=Serenity&utm_medium=referral' className='text-blue-500'>
                Unsplash
            </a>
        </BottomTextLabel>
    )
}

export default UnsplashCreditWidget
