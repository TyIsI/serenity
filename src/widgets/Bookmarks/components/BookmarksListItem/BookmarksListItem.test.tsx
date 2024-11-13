'use client'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { mockFn } from '@/lib/mock'

import { BookmarksListItem } from './BookmarksListItem'

describe('BookmarksListItem', () => {
    it('should mount', () => {
        render(<BookmarksListItem onSubmit={mockFn} bookmark={{ id: 'test', title: 'test', url: 'https://example.com/' }} />)

        const component = screen.getByTestId('BookmarksListItem')

        expect(component).toBeTruthy()
    })
})
