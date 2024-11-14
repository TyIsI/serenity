'use client'

import type { WeatherConsentModalProps } from './WeatherConsentModal.types'
import type { StoryFn } from '@storybook/react'

import { WeatherConsentModal } from './WeatherConsentModal'

export default {
    title: 'Component/WeatherConsentModal'
}

export const Default: StoryFn<WeatherConsentModalProps> = () => <WeatherConsentModal />

Default.args = {}
