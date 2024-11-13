'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Settings } from './Settings'

describe('Settings', () => {
    it('should mount', () => {
        render(<Settings />)

        const component = screen.getByTestId('Settings')

        expect(component).toBeTruthy()
    })
})
