'use client'

import { type FC, type FocusEvent, type FormEvent, type KeyboardEvent, useEffect, useState } from 'react'

import type { TasksItemProps } from './TaskItem.types'
import type { Task } from '../../classes/Task.class'

import { clsx } from 'clsx'

export const TaskItem: FC<TasksItemProps> = ({ task, onRemove, onUpdate }) => {
    const [localTask, setTask] = useState<Task>(task)
    const [editing, setEditing] = useState<boolean>(false)
    const [text, setText] = useState<string>(task.text)
    const [fadeOut, setFadeOut] = useState(false)

    const toggleEdit = (): void => {
        setEditing(!editing)
    }

    const endEdit = (event: FocusEvent<HTMLDivElement> | KeyboardEvent<HTMLInputElement>): void => {
        event.preventDefault()

        toggleEdit()

        setTask((prevTask) => {
            prevTask.text = text

            return task
        })
    }

    const handleTextChange = (text: string): void => {
        setText(text)
    }

    const keyHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            endEdit(event)
        } else if (event.key === 'Escape') {
            setText(localTask.text)
            toggleEdit()
        }
    }

    const onRemoveHandler = (): void => {
        setFadeOut(true)
        setTimeout(() => {
            onRemove(localTask.id)
        }, 2500)
    }

    useEffect(() => {
        onUpdate(localTask)
    }, [localTask])

    return (
        <div key={localTask.id} className={clsx('spacious flex flex-row', fadeOut ? 'transition-opacity' : null)}>
            <div className='basis-1/12'>
                <input
                    id={`checkbox${localTask.id}`}
                    defaultChecked
                    type='checkbox'
                    onClick={onRemoveHandler}
                    className='m-auto h-5 w-5 align-middle text-purple-300 accent-current'
                />
            </div>
            <div>
                {!editing ? (
                    <button
                        className='align-middle text-xl'
                        onClick={() => {
                            toggleEdit()
                        }}>
                        {text}
                    </button>
                ) : (
                    <input
                        className='h-8 w-11/12 rounded bg-white/100 px-2 text-black/100'
                        name='text'
                        value={text}
                        onChange={(event: FormEvent<HTMLInputElement>) => {
                            handleTextChange(event.currentTarget.value)
                        }}
                        onBlur={(event: FocusEvent<HTMLInputElement>) => {
                            endEdit(event)
                        }}
                        onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                            keyHandler(event)
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default TaskItem
