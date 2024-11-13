'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { UnsplashBackgroundProps } from './UnsplashBackground.types'

const LazyUnsplashBackground = lazy(async () => await import('./UnsplashBackground'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & UnsplashBackgroundProps

const UnsplashBackground: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyUnsplashBackground {...props} />
    </Suspense>
)

export default UnsplashBackground
