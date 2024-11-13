'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { WeatherProps } from './Weather.types'

const LazyWeather = lazy(async () => await import('./Weather'))

type LazyProps = JSX.IntrinsicAttributes | WeatherProps

const Weather: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeather {...props} />
    </Suspense>
)

export default Weather
