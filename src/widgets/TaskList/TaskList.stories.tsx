'use client'

import type { StoryFn } from '@storybook/react'

import { TaskList } from './TaskList'

export default {
    title: 'Widgets/Task'
}

export const Default: StoryFn = () => <TaskList />
