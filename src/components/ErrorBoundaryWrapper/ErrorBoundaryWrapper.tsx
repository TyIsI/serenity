'use client'

import { Component, type ReactNode } from 'react'

import type { ErrorBoundaryWrapperProps, ErrorBoundaryWrapperState } from './ErrorBoundaryWrapper.types'

export class ErrorBoundaryWrapper extends Component<ErrorBoundaryWrapperProps, ErrorBoundaryWrapperState> {
    constructor(props: ErrorBoundaryWrapperProps) {
        super(props)

        this.state = { hasError: false }
    }

    static getDerivedStateFromError(_error: unknown): ErrorBoundaryWrapperState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: unknown, errorInfo: unknown): void {
        // You can also log the error to an error reporting service
        console.warn(error, errorInfo)
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong with {this.props.handle}. Please activate your local EMH.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundaryWrapper
