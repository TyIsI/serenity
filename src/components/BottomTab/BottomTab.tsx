'use client'

import React, { type FC } from 'react'

import type { BottomTabProps } from './BottomTab.types'

import { clsx } from 'clsx'

export const BottomTab: FC<BottomTabProps> = ({ children, className }) => (
    <div className={clsx('flex-inline relative bottom-0 mx-3 mt-auto', className)} data-testid='BottomTab'>
        {children}
    </div>
)

export default BottomTab
