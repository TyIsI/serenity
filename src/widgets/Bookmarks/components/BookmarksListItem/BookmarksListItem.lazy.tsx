'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { BookmarksListItemProps } from './BookmarksListItem.types'

const LazyBookmarksListItem = lazy(async () => await import('./BookmarksListItem'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & BookmarksListItemProps

const BookmarksListItem: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyBookmarksListItem {...props} />
    </Suspense>
)

export default BookmarksListItem
