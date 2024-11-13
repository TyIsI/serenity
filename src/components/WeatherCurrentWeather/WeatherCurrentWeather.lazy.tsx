'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { WeatherCurrentWeatherProps } from './WeatherCurrentWeather.types'

const LazyWeatherCurrentWeather = lazy(async () => await import('./WeatherCurrentWeather'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & WeatherCurrentWeatherProps

const WeatherCurrentWeather: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherCurrentWeather {...props} />
    </Suspense>
)

export default WeatherCurrentWeather
