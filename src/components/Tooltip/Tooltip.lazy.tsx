'use client'

import React, { lazy, Suspense, type FC, type JSX } from 'react'

import type { TooltipProps } from './Tooltip.types'

const LazyTooltip = lazy(async () => await import('./Tooltip'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & TooltipProps

const Tooltip: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyTooltip {...props} />
    </Suspense>
)

export default Tooltip
