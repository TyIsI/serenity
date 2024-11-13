'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { UnsplashBackground } from './UnsplashBackground'

describe('UnsplashBackground', () => {
    it('should mount', () => {
        render(<UnsplashBackground />)

        const component = screen.getByTestId('UnsplashBackground')

        expect(component).toBeTruthy()
    })
})
