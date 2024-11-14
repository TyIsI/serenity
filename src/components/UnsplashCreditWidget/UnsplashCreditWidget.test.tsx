'use client'

import '@testing-library/jest-dom'

import type { Random } from 'unsplash-js/dist/methods/photos/types'
import type { Basic } from 'unsplash-js/dist/methods/users/types'

import { render, screen } from '@testing-library/react'

import { UnsplashCreditWidget } from './UnsplashCreditWidget'

const mockRandomUser: Basic = {
    bio: null,
    first_name: '',
    instagram_username: null,
    last_name: null,
    links: {
        followers: '',
        following: '',
        html: '',
        likes: '',
        photos: '',
        portfolio: '',
        self: ''
    },
    location: null,
    name: '',
    portfolio_url: null,
    profile_image: {
        small: '',
        medium: '',
        large: ''
    },
    total_collections: 0,
    total_likes: 0,
    total_photos: 0,
    twitter_username: null,
    updated_at: '',
    username: '',
    id: ''
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockRandomPhoto: Random = {
    alt_description: null,
    blur_hash: null,
    color: null,
    description: null,
    height: 0,
    likes: 0,
    links: {
        self: '',
        html: '',
        download: '',
        download_location: ''
    },
    promoted_at: null,
    width: 0,
    user: mockRandomUser,
    created_at: '',
    updated_at: '',
    urls: {
        full: '',
        raw: '',
        regular: '',
        small: '',
        thumb: ''
    },
    id: '',
    exif: {
        make: null,
        model: null,
        exposure_time: null,
        aperture: null,
        focal_length: null,
        iso: null
    },
    location: {
        city: null,
        country: null,
        name: null,
        position: {
            latitude: null,
            longitude: null
        }
    }
}

describe('UnsplashCreditWidget', () => {
    it('should mount', () => {
        render(<UnsplashCreditWidget />)

        const component = screen.getByTestId('UnsplashCreditWidget')

        expect(component).toBeTruthy()
    })
})
