'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { ModalIconProps } from './ModalIcon.types'

const LazyModalIcon = lazy(async () => await import('./ModalIcon'))

type LazyProps = JSX.IntrinsicAttributes & ModalIconProps

const ModalIcon: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyModalIcon {...props} />
    </Suspense>
)

export default ModalIcon
