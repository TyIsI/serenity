import type { Task } from '../../classes/Task.class'

export interface TasksItemProps {
    task: Task
    onRemove: (id: Task['id']) => void
    onUpdate: (task: Task) => void
}

export interface TasksItemState {
    editing: boolean
    text: string
    task: Task
}
