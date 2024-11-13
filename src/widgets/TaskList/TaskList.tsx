'use client'

import { type FC, type FormEvent, type KeyboardEvent, useState } from 'react'

import type { TaskListProps } from './TaskList.types'

import { DndContext, type DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

import { Conditional } from '@/components/Conditional/Conditional'
import { Draggable } from '@/components/Draggable/Draggable'
import { ErrorBoundaryWrapper } from '@/components/ErrorBoundaryWrapper/ErrorBoundaryWrapper'

import { sensorOpts } from '@/lib/constants'

import { useTaskList } from '@/hooks/useTasksList'

import { Task } from './classes/Task.class'
// import { TaskItem } from "./components/TaskItem/TaskItem";
import { TaskItem } from './components/TaskItem/TaskItem'

export const TaskList: FC<TaskListProps> = () => {
    const [tasklist, setTaskList] = useTaskList()
    const [newTaskText, setNewTaskText] = useState<string>('')

    const [activeId, setActiveId] = useState<string | null>(null)

    const mouseSensor = useSensor(MouseSensor, sensorOpts)
    const touchSensor = useSensor(TouchSensor, sensorOpts)

    const sensors = useSensors(mouseSensor, touchSensor)

    const newTaskTextHandler = (inp: string): void => {
        setNewTaskText(inp)
    }

    const newTaskKeyHandler = (key: string): void => {
        if (key === 'Enter') addTaskHandler()
    }

    const addTaskHandler = (): Task[] | undefined => {
        if (newTaskText.length === 0) {
            return
        }

        if (!tasklist.map((task) => task.text).includes(newTaskText)) {
            setTaskList([...tasklist, new Task(newTaskText)])
            setNewTaskText('')

            return tasklist
        }
    }

    const handleDragStart = (event: DragEndEvent): void => {
        setActiveId(String(event.active.id))
    }

    const handleDragEnd = (_event: DragEndEvent): void => {
        setActiveId(null)
    }

    const handleRemoveTask = (id: Task['id']): void => {
        console.log('handleRemoveTask', id)
    }

    const handleUpdateTask = (task: Task): void => {
        console.log('handleUpdateTask', task)
    }

    return (
        <ErrorBoundaryWrapper handle={'TaskList'}>
            <div className='flex flex-col'>
                <div className='spacious'>
                    <h3>Tasks</h3>
                </div>

                <div className='px-1'>
                    <hr />
                </div>

                <div className='spacious'>
                    <Conditional condition={typeof tasklist !== 'undefined' && tasklist.length === 0}>Hurray! No tasks!</Conditional>
                    <Conditional condition={typeof tasklist !== 'undefined' && tasklist.length > 0}>
                        <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
                            {tasklist
                                .filter((t) => t.id !== activeId)
                                .map((task) => (
                                    <Draggable key={`task-${task.id}`}>
                                        <TaskItem task={task} onRemove={handleRemoveTask} onUpdate={handleUpdateTask} />
                                    </Draggable>
                                ))}
                        </DndContext>
                    </Conditional>
                </div>

                <div className='px-1'>
                    <hr />
                </div>

                <div className='spacious flex flex-row'>
                    <div className='basis-5/6'>
                        <input
                            className='h-8 w-11/12 rounded bg-white/100 px-2 text-black/100'
                            name='newTaskText'
                            value={newTaskText}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                newTaskTextHandler(event.currentTarget.value)
                            }}
                            onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                                newTaskKeyHandler(event.key)
                            }}
                        />
                    </div>
                    <div className='basis-1/6'>
                        <button className='btn-light h-8 justify-self-end rounded px-3 py-1' onClick={() => addTaskHandler()}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </ErrorBoundaryWrapper>
    )
}

export default TaskList
