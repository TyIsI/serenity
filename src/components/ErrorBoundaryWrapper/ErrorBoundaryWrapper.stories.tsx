'use client'

import type { StoryFn } from '@storybook/react'

import { ErrorBoundaryWrapper } from './ErrorBoundaryWrapper'

export default {
    title: 'Component/ErrorBoundaryWrapper'
}

export const Default: StoryFn = () => <ErrorBoundaryWrapper handle={'error'}>Test</ErrorBoundaryWrapper>
