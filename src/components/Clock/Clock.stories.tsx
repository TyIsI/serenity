'use client'

import type { ClockProps } from './Clock.types'
import type { StoryFn } from '@storybook/react'

import { Clock } from './Clock'

export default {
    title: 'Component/Clock'
}

export const Default: StoryFn<ClockProps> = () => <Clock />
