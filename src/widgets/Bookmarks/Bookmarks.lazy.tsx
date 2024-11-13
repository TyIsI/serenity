'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { BookmarksProps } from './Bookmarks.types'

const LazyBookmarks = lazy(async () => await import('./Bookmarks'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & BookmarksProps

const Bookmarks: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyBookmarks {...props} />
    </Suspense>
)

export default Bookmarks
