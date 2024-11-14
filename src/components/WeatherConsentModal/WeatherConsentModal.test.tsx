'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { WeatherConsentModal } from './WeatherConsentModal'

describe('WeatherConsentModal', () => {
    it('should mount', () => {
        render(<WeatherConsentModal />)

        const component = screen.getByTestId('WeatherConsentModal')

        expect(component).toBeTruthy()
    })
})
