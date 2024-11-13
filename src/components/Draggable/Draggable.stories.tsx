'use client'

import type { DraggableProps } from './Draggable.types'
import type { StoryFn } from '@storybook/react'

import { Draggable } from './Draggable'

export default {
    title: 'Component/Draggable'
}

export const Default: StoryFn<DraggableProps> = () => <Draggable />
