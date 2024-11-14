'use client'

import React from 'react'

import { render, screen, within } from '@testing-library/react'

import '@testing-library/jest-dom'
import { Modal } from './Modal'

describe('Modal', () => {
    it('should mount', () => {
        render(
            <Modal
                title='test'
                show={false}
                onHide={() => {
                    throw new Error('Function not implemented.')
                }}
                closeButton={false}>
                <span data-testid='test-modal-content'>modal test</span>
            </Modal>
        )

        const modalItem = screen.getByTestId('test-modal-content')

        const withinItem = within(modalItem)

        expect(withinItem.getByText('test modal')).toBeTruthy()
    })
})
