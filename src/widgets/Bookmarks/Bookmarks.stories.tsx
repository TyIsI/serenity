'use client'

import type { StoryFn } from '@storybook/react'

import { Bookmarks } from './Bookmarks'

export default {
    title: 'Widgets/Bookmarks'
}

export const Default: StoryFn = () => <Bookmarks />
