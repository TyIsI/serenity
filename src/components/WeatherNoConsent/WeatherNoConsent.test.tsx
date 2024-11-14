'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { WeatherNoConsent } from './WeatherNoConsent'

describe('WeatherNoConsent', () => {
    it('should mount', () => {
        render(<WeatherNoConsent />)

        const component = screen.getByTestId('WeatherNoConsent')

        expect(component).toBeTruthy()
    })
})
