'use client'

import type { FC } from 'react'

import type { TasksWidgetToggleProps } from './TaskWidgetToggle.types'

import { clsx } from 'clsx'

import { useStateMachine } from '@/hooks/useStateMachine'

export const TasksWidgetToggle: FC<TasksWidgetToggleProps> = () => {
    const [showTasksWidget, setTaskWidget] = useStateMachine<boolean>('showTaskWidget', false)

    return (
        <button
            className={clsx(!showTasksWidget ? 'font-bold' : null)}
            onClick={() => {
                setTaskWidget(!showTasksWidget)
            }}>
            Tasks
        </button>
    )
}

export default TasksWidgetToggle
