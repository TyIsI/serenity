import React, { lazy, Suspense } from 'react'

import { ErrorBoundaryWrapperProps } from './ErrorBoundaryWrapper.types'

const LazyErrorBoundaryWrapper = lazy(() => import('./ErrorBoundaryWrapper'))

const ErrorBoundaryWrapper = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & ErrorBoundaryWrapperProps) => (
  <Suspense fallback={null}>
    <LazyErrorBoundaryWrapper {...props} />
  </Suspense>
)

export default ErrorBoundaryWrapper
