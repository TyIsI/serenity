'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BookmarkWidgetToggle } from './BookmarkWidgetToggle'

describe('BookmarkWidgetToggle', () => {
    it('should mount', () => {
        render(<BookmarkWidgetToggle />)

        const component = screen.getByTestId('BookmarkWidgetToggle')

        expect(component).toBeTruthy()
    })
})
