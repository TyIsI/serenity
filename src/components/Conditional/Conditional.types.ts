import type { ReactNode } from 'react'

export interface ConditionalProps {
    children?: ReactNode
    condition: boolean
}
