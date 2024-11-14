'use client'

import type { FC } from 'react'

import type { DraggableProps } from './Draggable.types'

import { useDraggable } from '@dnd-kit/core'

export const Draggable: FC<DraggableProps> = ({ children }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable'
    })

    const style =
        transform != null
            ? {
                  transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
              }
            : undefined

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    )
}

export default Draggable
