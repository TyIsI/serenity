'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SideMenu } from './SideMenu'

describe('SideMenu', () => {
    it('should mount', () => {
        render(<SideMenu />)

        const component = screen.getByTestId('SideMenu')

        expect(component).toBeTruthy()
    })
})
