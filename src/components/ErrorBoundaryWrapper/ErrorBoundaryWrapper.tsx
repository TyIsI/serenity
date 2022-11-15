import React, { Component } from 'react'

import { ErrorBoundaryWrapperProps, ErrorBoundaryWrapperState } from './ErrorBoundaryWrapper.types'

class ErrorBoundaryWrapper extends Component<ErrorBoundaryWrapperProps, ErrorBoundaryWrapperState> {
  constructor (props: ErrorBoundaryWrapperProps) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.warn(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong with {this.props.handle}. Please activate your local EMH.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundaryWrapper
