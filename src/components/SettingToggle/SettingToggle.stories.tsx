'use client'

import { useState } from 'react'

import type { StoryFn } from '@storybook/react'

import { Centered } from '@/components/Centered/Centered'

import { SettingToggle } from './SettingToggle'
import { styles } from './SettingToggle.util'

export default {
    title: 'Component/SettingToggle'
}

export const Default: StoryFn = () => {
    const [checked, setChecked] = useState(true)

    return (
        <Centered>
            <SettingToggle
                width={64}
                checked={checked}
                onChange={setChecked}
                onStyle={styles.onStyle}
                offStyle={styles.offStyle}
                offLabel='12h'
                onLabel='24h'
            />
        </Centered>
    )
}

export const Mixed: StoryFn = () => {
    const [checked, setChecked] = useState(true)

    return (
        <Centered>
            <SettingToggle
                width={64}
                checked={checked}
                onChange={setChecked}
                onStyle={styles.onStyle}
                offHighlightStyle={styles.noStyle}
                offStyle={styles.offStyle}
                offLabel='12h'
                onLabel='24h'
            />
        </Centered>
    )
}

export const FreedomFederation: StoryFn = () => {
    const [checked, setChecked] = useState(true)

    return (
        <Centered>
            <SettingToggle
                width={128}
                checked={checked}
                onChange={setChecked}
                onHighlightStyle={styles.federationOnStyle}
                onDefaultStyle={styles.federationOffStyle}
                offHighlightStyle={styles.freedomOnStyle}
                offDefaultStyle={styles.freedomOffStyle}
                offLabel='Freedom'
                onLabel='Federation'
            />
        </Centered>
    )
}
