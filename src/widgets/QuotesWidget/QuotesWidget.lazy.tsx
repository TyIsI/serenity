'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { QuotesWidgetProps } from './QuotesWidget.types'

const LazyQuotesWidget = lazy(async () => await import('./QuotesWidget'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & QuotesWidgetProps

const QuotesWidget: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyQuotesWidget {...props} />
    </Suspense>
)

export default QuotesWidget
