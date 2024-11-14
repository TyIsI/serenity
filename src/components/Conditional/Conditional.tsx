'use client'

import type { FC } from 'react'

import type { ConditionalProps } from './Conditional.types'

export const Conditional: FC<ConditionalProps> = ({ condition, children }) => {
    if (!condition) {
        return null
    }

    return <>{children}</>
}

export default Conditional
