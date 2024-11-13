'use client'

import type { WidgetContainerProps } from './WidgetContainer.types'
import type { StoryFn } from '@storybook/react'

import { WidgetContainer } from './WidgetContainer'

export default {
    title: 'Component/WidgetContainer'
}

export const Default: StoryFn<WidgetContainerProps> = () => <WidgetContainer />
