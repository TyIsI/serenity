'use client'

import type { FC } from 'react'

import type { UnsplashCreditWidgetProps } from './UnsplashCreditWidget.types'

import { BottomTextLabel } from '@/components/BottomTextLabel/BottomTextLabel'

import { useUnsplash } from '@/hooks/useUnsplash'

// import PhotoTemplate from '@/unsplash/util/PhotoTemplate'

// const fallbackPhotoInfo = { links: { html: 'https://unsplash.com' }, user: { first_name: 'John', last_name: 'Doe', links: { html: 'https://unsplash.com' } } }

export const UnsplashCreditWidget: FC<UnsplashCreditWidgetProps> = () => {
    const photo = useUnsplash()

    return (
        <BottomTextLabel className='right-6'>
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
