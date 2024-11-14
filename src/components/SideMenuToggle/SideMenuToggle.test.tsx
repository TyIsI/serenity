'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SideMenuToggle } from './SideMenuToggle'

describe('SideMenuToggle', () => {
    it('should mount', () => {
        render(<SideMenuToggle />)

        const component = screen.getByTestId('SideMenuToggle')

        expect(component).toBeTruthy()
    })
})
