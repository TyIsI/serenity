'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Weather } from './Weather'

describe('Weather', () => {
    it('should mount', () => {
        render(<Weather />)

        const component = screen.getByTestId('Weather')

        expect(component).toBeTruthy()
    })
})
