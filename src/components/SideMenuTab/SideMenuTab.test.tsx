'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { mockFn } from '@/lib/mock'

import { SideMenuTab } from './SideMenuTab'

describe('SideMenuTab', () => {
    it('should mount', () => {
        render(<SideMenuTab onClick={mockFn} />)

        const component = screen.getByTestId('SideMenuTab')

        expect(component).toBeTruthy()
    })
})
