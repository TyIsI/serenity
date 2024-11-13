'use client'

import type { UnsplashBackgroundProps } from './UnsplashBackground.types'
import type { StoryFn } from '@storybook/react'

import { UnsplashBackground } from './UnsplashBackground'

export default {
    title: 'Component/UnsplashBackground'
}

export const Default: StoryFn<UnsplashBackgroundProps> = () => <UnsplashBackground />
