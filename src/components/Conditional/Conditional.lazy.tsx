import React, { lazy, Suspense } from 'react'

import { ConditionalProps } from './Conditional.types'

const LazyConditional = lazy(() => import('./Conditional'))

const Conditional = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & ConditionalProps) => (
  <Suspense fallback={null}>
    <LazyConditional {...props} />
  </Suspense>
)

export default Conditional
