'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { SettingsProps } from './Settings.types'

const LazySettings = lazy(async () => await import('./Settings'))

type LazyProps = JSX.IntrinsicAttributes & SettingsProps

const Settings: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySettings {...props} />
    </Suspense>
)

export default Settings
