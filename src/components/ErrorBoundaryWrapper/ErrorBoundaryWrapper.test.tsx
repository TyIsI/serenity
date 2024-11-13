'use client'

import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { ErrorBoundaryWrapper } from './ErrorBoundaryWrapper'

describe('ErrorBoundaryWrapper', () => {
    it('should mount', () => {
        render(
            <ErrorBoundaryWrapper data-testid='ErrorBoundaryWrapper' handle={'error-boundary-test'}>
                <div></div>
            </ErrorBoundaryWrapper>
        )

        const component = screen.getByTestId('ErrorBoundaryWrapper')

        expect(component).toBeTruthy()
    })
})
