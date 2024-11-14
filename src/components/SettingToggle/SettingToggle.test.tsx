'use client'

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SettingToggle } from './SettingToggle'

describe('SettingToggle', () => {
    it('should mount', () => {
        render(
            <SettingToggle
                width={0}
                checked={false}
                onChange={(checked: boolean): void => {
                    console.log(`checked: ${checked}`)
                }}
            />
        )

        const component = screen.getByTestId('SettingToggle')

        expect(component).toBeTruthy()
    })
})
