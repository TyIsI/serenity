'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { SideMenuTabProps } from './SideMenuTab.types'

const LazySideMenuTab = lazy(async () => await import('./SideMenuTab'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & SideMenuTabProps

const SideMenuTab: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySideMenuTab {...props} />
    </Suspense>
)

export default SideMenuTab
