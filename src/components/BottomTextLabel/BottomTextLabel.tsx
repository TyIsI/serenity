'use client'

import type { FC } from 'react'

import type { BottomTextLabelProps } from './BottomTextLabel.types'

import { clsx } from 'clsx'

export const BottomTextLabel: FC<BottomTextLabelProps> = ({ children, className }) => (
    <div className={clsx('display-inline fixed bottom-0 h-6', className)} data-testid='BottomTextLabel'>
        <span className='decoration-none size-3 rounded-t-md bg-black p-1 tracking-wide text-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] transition-all duration-200 ease-in-out'>
            {children}
        </span>
    </div>
)

export default BottomTextLabel
