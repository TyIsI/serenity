'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BookmarksListItem } from './BookmarksListItem'

describe('BookmarksListItem', () => {
    it('should mount', () => {
        render(<BookmarksListItem />)

        const component = screen.getByTestId('BookmarksListItem')

        expect(component).toBeTruthy()
    })
})
