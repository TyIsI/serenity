'use client'

import { lazy, Suspense, type FC, type JSX, type ReactNode } from 'react'

import type { WeatherWaitingForConsentProps } from './WeatherWaitingForConsent.types'

const LazyWeatherWaitingForConsent = lazy(async () => await import('./WeatherWaitingForConsent'))

type LazyProps = JSX.IntrinsicAttributes & { children?: ReactNode } & WeatherWaitingForConsentProps

const WeatherWaitingForConsent: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherWaitingForConsent {...props} />
    </Suspense>
)

export default WeatherWaitingForConsent
