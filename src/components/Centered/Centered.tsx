'use client'

import type { FC } from 'react'

import type { CenteredProps } from './Centered.types'

export const Centered: FC<CenteredProps> = ({ children }) => (
    <div className='container mx-auto'>
        <div className='flex justify-center'>{children}</div>
    </div>
)

export default Centered
