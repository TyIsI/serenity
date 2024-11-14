'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { WeatherLoadingSpinner } from './WeatherLoadingSpinner'

describe('WeatherLoadingSpinner', () => {
    it('should mount', () => {
        render(<WeatherLoadingSpinner />)

        const component = screen.getByTestId('WeatherLoadingSpinner')

        expect(component).toBeTruthy()
    })
})
