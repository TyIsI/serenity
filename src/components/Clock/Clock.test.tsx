'use client'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Clock } from './Clock'

describe('Clock', () => {
    it('should mount', () => {
        render(<Clock />)

        const component = screen.getByTestId('Clock')

        expect(component).toBeTruthy()
    })
})
