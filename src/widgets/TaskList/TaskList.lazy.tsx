'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { TaskListProps } from './TaskList.types'

const LazyTask = lazy(async () => await import('./TaskList'))

type LazyProps = JSX.IntrinsicAttributes & TaskListProps

const Task: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyTask {...props} />
    </Suspense>
)

export default Task
