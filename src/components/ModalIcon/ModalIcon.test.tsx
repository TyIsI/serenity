'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ModalIcon } from './ModalIcon'

describe('ModalIcon', () => {
    it('should mount', () => {
        render(<ModalIcon style={'default'} />)

        const component = screen.getByTestId('ModalIcon')

        expect(component).toBeTruthy()
    })
})
