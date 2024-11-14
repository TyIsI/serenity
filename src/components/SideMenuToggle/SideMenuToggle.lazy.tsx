'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { SideMenuToggleProps } from './SideMenuToggle.types'

const LazySideMenuToggle = lazy(async () => await import('./SideMenuToggle'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & SideMenuToggleProps

const SideMenuToggle: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySideMenuToggle {...props} />
    </Suspense>
)

export default SideMenuToggle
