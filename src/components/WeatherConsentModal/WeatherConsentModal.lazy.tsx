import React, { lazy, Suspense } from 'react'
import { WeatherConsentModalProps } from './WeatherConsentModal.types'

const LazyWeatherConsentModal = lazy(() => import('./WeatherConsentModal'))

const WeatherConsentModal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & WeatherConsentModalProps) => (
  <Suspense fallback={null}>
    <LazyWeatherConsentModal {...props} />
  </Suspense>
)

export default WeatherConsentModal
