'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { WeatherCurrentWeather } from './WeatherCurrentWeather'

describe('WeatherCurrentWeather', () => {
    it('should mount', () => {
        render(<WeatherCurrentWeather />)

        const component = screen.getByTestId('WeatherCurrentWeather')

        expect(component).toBeTruthy()
    })
})
