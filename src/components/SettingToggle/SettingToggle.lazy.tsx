'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { SettingToggleProps } from './SettingToggle.types'

const LazySettingToggle = lazy(async () => await import('./SettingToggle'))

type LazyProps = JSX.IntrinsicAttributes & SettingToggleProps

const SettingToggle: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySettingToggle {...props} />
    </Suspense>
)

export default SettingToggle
