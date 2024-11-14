'use client'

import type { StoryFn } from '@storybook/react'

import { Conditional } from './Conditional'

const Story = {
    title: 'Component/Conditional'
}

export const Default: StoryFn = () => <Conditional condition={true}>This is visible.</Conditional>

export const Hidden: StoryFn = () => <Conditional condition={false}>This is hidden</Conditional>

export default Story
