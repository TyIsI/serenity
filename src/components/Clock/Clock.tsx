'use client'

import { type FC, useEffect, useState } from 'react'

import type { ClockProps } from './Clock.types'

import { imperialTimeScale, metricTimeScale } from '@/lib/constants'

import { useClock24HModeSetting } from '@/hooks/useClock24HModeSetting'

interface TimeFormat {
    locale: string
    options: Intl.DateTimeFormatOptions
}

type TimeFormats = TimeFormat[]

const timeFormats: TimeFormats = [
    { locale: 'en-GB', options: { hour: 'numeric', minute: 'numeric', second: 'numeric' } },
    { locale: 'en-US', options: { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true } }
]

const renderTime = (clockMode: number): string => {
    const date = new Date()

    const localOpts = clockMode === 24 ? timeFormats[0] : timeFormats[1]

    return date.toLocaleTimeString(localOpts.locale, localOpts.options)
}

export const Clock: FC<ClockProps> = () => {
    const [isClock24H] = useClock24HModeSetting()

    const clockMode = isClock24H ? metricTimeScale : imperialTimeScale

    const [clock, setClock] = useState('00:00:00')

    useEffect(() => {
        const interval = window.setInterval(() => {
            setClock(renderTime(clockMode))
        }, 1000)

        setClock(renderTime(clockMode))

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='inline min-w-52' data-testid='Clock'>
            {clock}
        </div>
    )
}

export default Clock
