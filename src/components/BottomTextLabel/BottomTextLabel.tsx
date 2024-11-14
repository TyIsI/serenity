'use client'

import type { FC } from 'react'

import type { BottomTextLabelProps } from './BottomTextLabel.types'

export const BottomTextLabel: FC<BottomTextLabelProps> = ({ children }) => (
    <span
        className='decoration-none size-3 h-6 rounded-t-md bg-black p-1 tracking-wide text-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] transition-all duration-200 ease-in-out'
        data-testid='BottomTextLabel'>
        {children}
    </span>
)

export default BottomTextLabel
