import React, { lazy, Suspense } from 'react'

import { PrivacyPolicyProps } from './PrivacyPolicy.types'

const LazyPrivacyPolicy = lazy(() => import('./PrivacyPolicy'))

const PrivacyPolicy = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & PrivacyPolicyProps) => (
  <Suspense fallback={null}>
    <LazyPrivacyPolicy {...props} />
  </Suspense>
)

export default PrivacyPolicy
