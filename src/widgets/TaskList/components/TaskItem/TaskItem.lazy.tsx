'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { TasksItemProps } from './TaskItem.types'

const TaskItem = lazy(async () => await import('./TaskItem').then((module) => ({ default: module.TaskItem })))

type LazyProps = JSX.IntrinsicAttributes & { children?: React.ReactNode } & TasksItemProps

export const LazyTaskItem: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <TaskItem {...props} />
    </Suspense>
)
