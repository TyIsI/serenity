import React, { lazy, Suspense } from 'react'

import { ClockProps } from './Clock.d'

const LazyClock = lazy(() => import('./Clock'))

const Clock = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & ClockProps) => (
  <Suspense fallback={null}>
    <LazyClock {...props} />
  </Suspense>
)

export default Clock
