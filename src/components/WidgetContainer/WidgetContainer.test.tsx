'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { WidgetContainer } from './WidgetContainer'

describe('WidgetContainer', () => {
    it('should mount', () => {
        render(<WidgetContainer />)

        const component = screen.getByTestId('WidgetContainer')

        expect(component).toBeTruthy()
    })
})
