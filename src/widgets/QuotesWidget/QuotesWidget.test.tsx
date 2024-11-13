'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { QuotesWidget } from './QuotesWidget'

describe('QuotesWidget', () => {
    it('should mount', () => {
        render(<QuotesWidget />)

        const component = screen.getByTestId('QuotesWidget')

        expect(component).toBeTruthy()
    })
})
