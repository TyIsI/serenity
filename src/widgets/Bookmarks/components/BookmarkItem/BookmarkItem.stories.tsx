'use client'

import type { BookmarkItemProps } from './BookmarkItem.types'
import type { StoryFn } from '@storybook/react'

import { BookmarkItem } from './BookmarkItem'

export default {
    title: 'Component/Bookmark'
}

export const Default: StoryFn<BookmarkItemProps> = () => <BookmarkItem bookmark={{ id: -1, title: 'Story', url: 'https://storybook.js.org/' }} />
