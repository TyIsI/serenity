'use client'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Centered } from './Centered'

describe('Centered', () => {
    it('should mount', () => {
        render(<Centered />)

        const component = screen.getByTestId('Centered')

        expect(component).toBeTruthy()
    })
})
