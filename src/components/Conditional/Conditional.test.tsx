'use client'

import React from 'react'

import { render, screen, within } from '@testing-library/react'

import { Conditional } from './Conditional'
import '@testing-library/jest-dom'

describe('Conditional', () => {
    it('should mount', () => {
        render(
            <Conditional condition={true}>
                <span data-testid='Conditional'>Conditional</span>
            </Conditional>
        )

        const conditionalItem = screen.getByTestId('Conditional')

        expect(conditionalItem).toBeTruthy()

        const withinConditionalItem = within(conditionalItem)

        expect(withinConditionalItem.getByText('Conditional')).toContain('Conditional')
    })
})
