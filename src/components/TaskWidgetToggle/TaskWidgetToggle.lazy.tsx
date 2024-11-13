'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { TasksWidgetToggleProps } from './TaskWidgetToggle.types'

const LazyTaskWidgetToggle = lazy(async () => await import('./TaskWidgetToggle'))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & TasksWidgetToggleProps

const TaskWidgetToggle: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyTaskWidgetToggle {...props} />
    </Suspense>
)

export default TaskWidgetToggle
