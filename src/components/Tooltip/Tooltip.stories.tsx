'use client'

import type { TooltipProps } from './Tooltip.types'
import type { StoryFn } from '@storybook/react'

import { Centered } from '@/components/Centered/Centered'

import { Tooltip } from './Tooltip'

export default {
    title: 'Component/Tooltip'
}

export const Default: StoryFn<TooltipProps> = () => (
    <Centered>
        <Tooltip content={'Tooltip Content'}>
            <button
                onClick={() => {
                    window.alert('clicked')
                }}>
                Button
            </button>
        </Tooltip>
    </Centered>
)
