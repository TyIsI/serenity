'use client'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
    it('should mount', () => {
        render(
            <Tooltip content={undefined}>
                <div data-testid='Tooltip'>Tooltip</div>
            </Tooltip>
        )

        const component = screen.getByTestId('Tooltip')

        expect(component).toBeTruthy()
    })
})
