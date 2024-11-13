'use client'

import type { QuotesWidgetProps } from './QuotesWidget.types'
import type { StoryFn } from '@storybook/react'

import { QuotesWidget } from './QuotesWidget'

export default {
    title: 'Component/QuotesWidget'
}

export const Default: StoryFn<QuotesWidgetProps> = () => <QuotesWidget />
