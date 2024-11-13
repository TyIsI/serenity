'use client'

import type { BookmarksListItemProps } from './BookmarksListItem.types'
import type { StoryFn } from '@storybook/react'

import { BookmarksListItem } from './BookmarksListItem'

export default {
    title: 'Component/BookmarksListItem'
}

export const Default: StoryFn<BookmarksListItemProps> = () => <BookmarksListItem />
