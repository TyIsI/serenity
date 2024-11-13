'use client'

import type { StoryFn } from '@storybook/react'

import { BottomTextLabel } from './BottomTextLabel'

export default {
    title: 'Component/BottomTextLabel'
}

export const Default: StoryFn = () => <BottomTextLabel>BottomTextLabel</BottomTextLabel>

export const RightSide: StoryFn = () => <BottomTextLabel className='right-6'>BottomTextLabel</BottomTextLabel>
