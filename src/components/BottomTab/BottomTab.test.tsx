'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BottomTab } from './BottomTab'

describe('BottomTab', () => {
    it('should mount', () => {
        render(<BottomTab />)

        const component = screen.getByTestId('BottomTab')

        expect(component).toBeTruthy()
    })
})
