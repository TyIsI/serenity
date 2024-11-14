'use client'

import React, { type FC } from 'react'

import type { SideMenuToggleProps } from './SideMenuToggle.types'

import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon'

import { useStateMachine } from '@/hooks/useStateMachine'

export const SideMenuToggle: FC<SideMenuToggleProps> = () => {
    const [showSideMenu, setShowSideMenu] = useStateMachine('showSideMenu', false)

    const toggleSideMenu = (): void => {
        setShowSideMenu(!showSideMenu)
    }

    return (
        <button
            className='h-6 w-6 rounded-t-sm border-x border-t border-white bg-black/50 px-1 pb-3 pt-1 text-white/100'
            onClick={() => {
                toggleSideMenu()
            }}>
            <Bars3Icon />
        </button>
    )
}

export default SideMenuToggle
