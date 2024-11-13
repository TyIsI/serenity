'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SourceCredit } from './SourceCredit'

describe('SourceCredit', () => {
    it('should mount', () => {
        render(<SourceCredit />)

        const component = screen.getByTestId('SourceCredit')

        expect(component).toBeTruthy()
    })
})
