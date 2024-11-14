'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { WeatherConsentModalProps } from './WeatherConsentModal.types'

const LazyWeatherConsentModal = lazy(async () => await import('./WeatherConsentModal'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & WeatherConsentModalProps

const WeatherConsentModal: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherConsentModal {...props} />
    </Suspense>
)

export default WeatherConsentModal
