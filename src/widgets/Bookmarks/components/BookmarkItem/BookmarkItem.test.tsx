'use client'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { BookmarkItem } from './BookmarkItem'

describe('Bookmark', () => {
    it('should mount', () => {
        render(<BookmarkItem bookmark={{ id: 0, title: 'Test', url: 'https://en.wikipedia.org/' }} />)

        const component = screen.getByTestId('Bookmark')

        expect(component).toBeTruthy()
    })
})
