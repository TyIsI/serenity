'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { ClockProps } from './Clock.types'

const LazyClock = lazy(async () => await import('./Clock'))

const Clock: FC<JSX.IntrinsicAttributes & ClockProps> = (props: JSX.IntrinsicAttributes & ClockProps) => (
    <Suspense fallback={null}>
        <LazyClock {...props} />
    </Suspense>
)

export default Clock
