'use client'

import type { BookmarksListItemProps } from './BookmarksListItem.types'
import type { StoryFn } from '@storybook/react'

import { mockFn } from '@/lib/mock'

import { BookmarksListItem } from './BookmarksListItem'

export default {
    title: 'Component/BookmarksListItem'
}

export const Default: StoryFn<BookmarksListItemProps> = () => (
    <BookmarksListItem onSubmit={mockFn} bookmark={{ id: 'test', title: 'test', url: 'https://example.com/' }} />
)
