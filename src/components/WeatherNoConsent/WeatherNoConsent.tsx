'use client'

import type { FC } from 'react'

import type { WeatherNoConsentProps } from './WeatherNoConsent.types'

import { clsx } from 'clsx'

import { Tooltip } from '@/components/Tooltip/Tooltip'

export const WeatherNoConsent: FC<WeatherNoConsentProps> = ({ className }) => (
    <div className={clsx('flex', className)}>
        <div>
            <Tooltip
                content={
                    <div>
                        <b>Serenity is not tracking your location</b>
                        <br />
                        Click to (re-)enable location updates
                    </div>
                }>
                <span className='font-bold italic'>Weather is not available</span>
            </Tooltip>
        </div>
    </div>
)

export default WeatherNoConsent
