import { useMemo } from 'react'

import { Task, type TaskData } from '@/widgets/TaskList/classes/Task.class'

import { useStateMachine } from './useStateMachine'

export const useTaskList = (): [Task[], (val: Task[]) => void] => {
    const [storedTasks, setStoredTasks] = useStateMachine<TaskData[]>('tasklist', [])

    const setTaskList = (tasks: Task[]): void => {
        setStoredTasks(tasks.map((e) => e.serialize()))
    }

    const taskList = useMemo(() => {
        return storedTasks.map((s) => Task.unserialize(s))
    }, [storedTasks])

    return [taskList, setTaskList]
}
