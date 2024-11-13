import type { ReactNode } from 'react'

import type { Task } from './classes/Task.class'

export interface TaskListProps {
    children?: ReactNode
}

export interface TaskState {
    tasklist: Task[]
    newTaskText: string
}
