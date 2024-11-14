'use client'

import { type FC, type JSX, lazy, type ReactNode, Suspense } from 'react'

import type { WeatherNoConsentProps } from './WeatherNoConsent.types'

const LazyWeatherNoConsent = lazy(async () => await import('./WeatherNoConsent'))

type LazyProps = JSX.IntrinsicAttributes & { children?: ReactNode } & WeatherNoConsentProps

const WeatherNoConsent: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherNoConsent {...props} />
    </Suspense>
)

export default WeatherNoConsent
