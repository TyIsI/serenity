'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TasksWidgetToggle } from './TaskWidgetToggle'

describe('TaskWidgetToggle', () => {
    it('should mount', () => {
        render(<TasksWidgetToggle />)

        const component = screen.getByTestId('TaskWidgetToggle')

        expect(component).toBeTruthy()
    })
})
