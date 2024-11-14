'use client'

import type { FC } from 'react'

import type { TasksWidgetToggleProps } from './TaskWidgetToggle.types'

import { clsx } from 'clsx'

import { useIsReady } from '@/hooks/useIsReady'
import { useStateMachine } from '@/hooks/useStateMachine'

export const TasksWidgetToggle: FC<TasksWidgetToggleProps> = () => {
    const [showTasksWidget, setTaskWidget] = useStateMachine<boolean>('showTaskWidget', false)

    const isReady = useIsReady()

    return (
        <button
            className={clsx(isReady && !showTasksWidget ? 'font-bold' : null)}
            onClick={() => {
                setTaskWidget(!showTasksWidget)
            }}>
            Tasks
        </button>
    )
}

export default TasksWidgetToggle
