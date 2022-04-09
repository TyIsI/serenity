import React, { lazy, Suspense } from 'react'

import { WeatherProps } from './Weather.types'

const LazyWeather = lazy(() => import('./Weather'))

const Weather = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & WeatherProps) => (
  <Suspense fallback={null}>
    <LazyWeather {...props} />
  </Suspense>
)

export default Weather
