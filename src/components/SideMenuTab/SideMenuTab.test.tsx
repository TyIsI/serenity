'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SideMenuTab } from './SideMenuTab'

describe('SideMenuTab', () => {
    it('should mount', () => {
        render(<SideMenuTab />)

        const component = screen.getByTestId('SideMenuTab')

        expect(component).toBeTruthy()
    })
})
