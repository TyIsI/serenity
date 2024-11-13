'use client'

import { lazy, Suspense, type FC, type JSX } from 'react'

import type { BottomTextLabelProps } from './BottomTextLabel.types'

const LazyBottomTextLabel = lazy(async () => await import('./BottomTextLabel'))

const BottomTextLabel: FC<JSX.IntrinsicAttributes & BottomTextLabelProps> = (props: JSX.IntrinsicAttributes & BottomTextLabelProps) => (
    <Suspense fallback={null}>
        <LazyBottomTextLabel {...props} />
    </Suspense>
)

export default BottomTextLabel
