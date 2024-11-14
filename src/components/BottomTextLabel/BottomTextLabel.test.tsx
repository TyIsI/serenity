'use client'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { BottomTextLabel } from './BottomTextLabel'

describe('BottomTextLabel', () => {
    it('component should mount', () => {
        render(<BottomTextLabel />)

        const component = screen.getByTestId('BottomTextLabel')

        expect(component).toBeTruthy()
    })
})
