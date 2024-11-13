'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { SideMenuProps } from './SideMenu.types'

const LazySideMenu = lazy(async () => await import('./SideMenu'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & SideMenuProps

const SideMenu: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySideMenu {...props} />
    </Suspense>
)

export default SideMenu
