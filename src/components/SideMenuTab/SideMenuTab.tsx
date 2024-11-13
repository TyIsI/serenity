"use client"

import React, { type FC } from "react"

import type { SideMenuTabProps } from "./SideMenuTab.types"

import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon"

export const SideMenuTab: FC<SideMenuTabProps> = ({ onClick }) => (
    <button className='fixed bottom-0 left-6 h-6 w-6 rounded-t-sm border-x border-t border-white bg-black/50 px-1 py-0.5 text-white/100' onClick={onClick}>
        <Bars3Icon />
    </button>
)

export default SideMenuTab
