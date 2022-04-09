import React, { lazy, Suspense } from 'react'

import { UnsplashCreditProps } from './UnsplashCredit.types'

const LazyUnsplashCredit = lazy(() => import('./UnsplashCredit'))

const UnsplashCredit = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & UnsplashCreditProps) => (
  <Suspense fallback={null}>
    <LazyUnsplashCredit {...props} />
  </Suspense>
)

export default UnsplashCredit
