'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { SourceCreditProps } from './SourceCredit.types'

const LazySourceCredit = lazy(async () => await import('./SourceCredit'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & SourceCreditProps

const SourceCredit: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySourceCredit {...props} />
    </Suspense>
)

export default SourceCredit
