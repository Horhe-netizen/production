import React, { type ErrorInfo, Suspense } from 'react'
import { ErrorFallback } from '@src/widgets/ErrorFallback'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Suspense fallback="">
          <ErrorFallback />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
