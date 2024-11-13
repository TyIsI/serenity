'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { BookmarkFormProps } from './BookmarkForm.types'

const LazyBookmarkForm = lazy(async () => await import('./BookmarkForm'))

type LazyProps = JSX.IntrinsicAttributes & {
    children?: React.ReactNode
} & BookmarkFormProps

const BookmarkForm: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyBookmarkForm {...props} />
    </Suspense>
)

export default BookmarkForm
