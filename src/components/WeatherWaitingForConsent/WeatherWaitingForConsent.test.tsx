'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { WeatherWaitingForConsent } from './WeatherWaitingForConsent'

describe('WeatherWaitingForConsent', () => {
    it('should mount', () => {
        render(<WeatherWaitingForConsent />)

        const component = screen.getByTestId('WeatherWaitingForConsent')

        expect(component).toBeTruthy()
    })
})
