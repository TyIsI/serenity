'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { UnsplashCreditWidgetProps } from './UnsplashCreditWidget.types'

const LazyUnsplashCreditWidget = lazy(async () => await import('./UnsplashCreditWidget'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & UnsplashCreditWidgetProps

const UnsplashCreditWidget: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyUnsplashCreditWidget {...props} />
    </Suspense>
)

export default UnsplashCreditWidget
