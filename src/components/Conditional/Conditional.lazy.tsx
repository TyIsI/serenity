'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { ConditionalProps } from './Conditional.types'

const LazyConditional = lazy(async () => await import('./Conditional'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & ConditionalProps

const Conditional: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyConditional {...props} />
    </Suspense>
)

export default Conditional
