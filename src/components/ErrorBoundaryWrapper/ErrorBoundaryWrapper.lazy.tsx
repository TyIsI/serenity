'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { ErrorBoundaryWrapperProps } from './ErrorBoundaryWrapper.types'

const LazyErrorBoundaryWrapper = lazy(async () => await import('./ErrorBoundaryWrapper'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & ErrorBoundaryWrapperProps

const ErrorBoundaryWrapper: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyErrorBoundaryWrapper {...props} />
    </Suspense>
)

export default ErrorBoundaryWrapper
