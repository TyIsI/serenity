'use client'

import { useEffect, useId, useState, type FC } from 'react'

import type { SettingToggleProps } from './SettingToggle.types'

import { clsx } from 'clsx'

import { twPeerChecked } from './SettingToggle.util'

// const defaultOnStyle = 'bg-violet-400 dark:bg-violet-600'
// const defaultOffStyle = 'bg-gray-300 dark:bg-gray-700'

const defaultOnStyle = 'bg-cornflowerblue dark:bg-cornflowernavy'
const defaultOffStyle = 'bg-gray-300 dark:bg-gray-700'

export const SettingToggle: FC<SettingToggleProps> = ({
    checked,
    onLabel,
    offLabel,
    onChange,
    onStyle,
    offStyle,
    onHighlightStyle,
    onDefaultStyle,
    offHighlightStyle,
    offDefaultStyle
}) => {
    const inputId = useId()

    const [localChecked, setChecked] = useState(checked)

    useEffect(() => {
        setChecked(checked)
    }, [checked])

    return (
        <label
            htmlFor={inputId}
            className={clsx('inline-flex w-full cursor-pointer items-center overflow-x-hidden rounded-md p-2 text-gray-800 dark:text-gray-100')}>
            <input
                id={inputId}
                type='checkbox'
                className='peer hidden'
                onChange={(event) => {
                    onChange(event.target.checked)

                    return true
                }}
                checked={localChecked}
            />
            <span
                className={clsx(
                    'pointer-events-auto rounded-l-md px-4 py-2 text-center',
                    localChecked
                        ? `${offDefaultStyle ?? offStyle ?? defaultOffStyle} font-light`
                        : `${offHighlightStyle ?? onStyle ?? defaultOnStyle} font-bold`,
                    localChecked
                        ? twPeerChecked(`${offHighlightStyle ?? onStyle ?? defaultOnStyle} font-bold`)
                        : twPeerChecked(`${offStyle ?? defaultOffStyle} font-light`)
                )}>
                {offLabel ?? 'Off'}
            </span>
            <span
                className={clsx(
                    'pointer-events-auto rounded-r-md px-4 py-2 text-center',
                    localChecked ? `${onHighlightStyle ?? onStyle ?? defaultOnStyle} font-bold` : `${onDefaultStyle ?? offStyle ?? defaultOffStyle} font-light`,
                    localChecked
                        ? twPeerChecked(`${onDefaultStyle ?? offStyle ?? defaultOffStyle} font-bold`)
                        : twPeerChecked(`${onHighlightStyle ?? onStyle ?? defaultOnStyle} font-light`)
                )}>
                {onLabel ?? 'On'}
            </span>
        </label>
    )
}

export default SettingToggle
