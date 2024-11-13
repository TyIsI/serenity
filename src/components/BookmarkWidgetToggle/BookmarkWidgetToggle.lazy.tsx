'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { BookmarkWidgetToggleProps } from './BookmarkWidgetToggle.types'

const LazyBookmarkWidgetToggle = lazy(async () => await import('./BookmarkWidgetToggle'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & BookmarkWidgetToggleProps

const BookmarkWidgetToggle: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyBookmarkWidgetToggle {...props} />
    </Suspense>
)

export default BookmarkWidgetToggle
