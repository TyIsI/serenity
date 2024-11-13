'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { PrivacyPolicy } from './PrivacyPolicy'

describe('PrivacyPolicy', () => {
    it('should mount', () => {
        render(<PrivacyPolicy />)

        const component = screen.getByTestId('PrivacyPolicy')

        expect(component).toBeTruthy()
    })
})
