'use client'

import type { SideMenuTabProps } from './SideMenuTab.types'
import type { StoryFn } from '@storybook/react'

import { SideMenuTab } from './SideMenuTab'

export default {
    title: 'Component/SideMenuTab'
}

export const Default: StoryFn<SideMenuTabProps> = () => <SideMenuTab />
