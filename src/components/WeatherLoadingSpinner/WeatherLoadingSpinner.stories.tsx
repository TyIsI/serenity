'use client'

import type { WeatherLoadingSpinnerProps } from './WeatherLoadingSpinner.types'
import type { StoryFn } from '@storybook/react'

import { WeatherLoadingSpinner } from './WeatherLoadingSpinner'

export default {
    title: 'Component/WeatherLoadingSpinner'
}

export const Default: StoryFn<WeatherLoadingSpinnerProps> = () => (
    <div className='container mx-auto'>
        <div className='flex justify-center'>
            <WeatherLoadingSpinner />
        </div>
    </div>
)
