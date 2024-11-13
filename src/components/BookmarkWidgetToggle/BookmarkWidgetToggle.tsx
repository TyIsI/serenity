'use client'

import React, { type FC } from 'react'

import type { BookmarkWidgetToggleProps } from './BookmarkWidgetToggle.types'

import { clsx } from 'clsx'

import { useStateMachine } from '@/hooks/useStateMachine'

export const BookmarkWidgetToggle: FC<BookmarkWidgetToggleProps> = () => {
    const [showBookmarksWidget, toggleBookmarksWidget] = useStateMachine<boolean>('showBookmarksWidget', false)

    return (
        <button
            className={clsx(!showBookmarksWidget ? 'font-bold' : null)}
            onClick={() => {
                toggleBookmarksWidget(!showBookmarksWidget)
            }}>
            Bookmarks
        </button>
    )
}

export default BookmarkWidgetToggle
