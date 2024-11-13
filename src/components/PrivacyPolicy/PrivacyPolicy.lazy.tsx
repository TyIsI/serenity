'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { PrivacyPolicyProps } from './PrivacyPolicy.types'

const LazyPrivacyPolicy = lazy(async () => await import('./PrivacyPolicy'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & PrivacyPolicyProps

const PrivacyPolicy: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyPrivacyPolicy {...props} />
    </Suspense>
)

export default PrivacyPolicy
