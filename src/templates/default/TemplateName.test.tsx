'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TemplateName } from './TemplateName'

describe('TemplateName', () => {
    it('should mount', () => {
        render(<TemplateName />)

        const component = screen.getByTestId('templatename')

        expect(component).toBeTruthy()
    })
})
