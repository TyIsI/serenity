import React, { lazy, Suspense } from 'react'

import { SourceCreditProps } from './SourceCredit.d'

const LazySourceCredit = lazy(() => import('./SourceCredit'))

const SourceCredit = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & SourceCreditProps) => (
  <Suspense fallback={null}>
    <LazySourceCredit {...props} />
  </Suspense>
)

export default SourceCredit
