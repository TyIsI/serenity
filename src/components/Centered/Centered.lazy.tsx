'use client'

import { type FC, lazy, Suspense, type JSX } from 'react'

import type { CenteredProps } from './Centered.types'

const LazyCentered = lazy(async () => await import('./Centered'))

const Centered: FC<JSX.IntrinsicAttributes & CenteredProps> = (props: JSX.IntrinsicAttributes & CenteredProps) => (
    <Suspense fallback={null}>
        <LazyCentered {...props} />
    </Suspense>
)

export default Centered
