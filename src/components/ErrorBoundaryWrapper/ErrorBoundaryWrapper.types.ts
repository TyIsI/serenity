import type { ReactNode } from 'react'

export interface ErrorBoundaryWrapperProps {
    children?: ReactNode
    handle: string
}

export interface ErrorBoundaryWrapperState {
    hasError: boolean
}
