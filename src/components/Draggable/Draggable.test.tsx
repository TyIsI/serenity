'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Draggable } from './Draggable'

describe('Draggable', () => {
    it('should mount', () => {
        render(<Draggable />)

        const component = screen.getByTestId('Draggable')

        expect(component).toBeTruthy()
    })
})
