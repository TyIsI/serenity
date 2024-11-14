'use client'

import type { WeatherWaitingForConsentProps } from './WeatherWaitingForConsent.types'
import type { StoryFn } from '@storybook/react'

import { WeatherWaitingForConsent } from './WeatherWaitingForConsent'

export default {
    title: 'Component/WeatherWaitingForConsent'
}

export const Default: StoryFn<WeatherWaitingForConsentProps> = () => (
    <div className='container mx-auto'>
        <div className='flex justify-center'>
            <WeatherWaitingForConsent />
        </div>
    </div>
)
