'use client'

import type { FC } from 'react'

import type { WeatherProps } from './Weather.types'

import { ErrorBoundaryWrapper } from '@/components/ErrorBoundaryWrapper/ErrorBoundaryWrapper'
import { WeatherConsentModal } from '@/components/WeatherConsentModal/WeatherConsentModal'
import { WeatherLoadingSpinner } from '@/components/WeatherLoadingSpinner/WeatherLoadingSpinner'
import { WeatherNoConsent } from '@/components/WeatherNoConsent/WeatherNoConsent'
import { WeatherWaitingForConsent } from '@/components/WeatherWaitingForConsent/WeatherWaitingForConsent'

import { zConsentStateAccepted, zConsentStateDeclined, zConsentStateUnknown } from '@/types/consent'

import { useLocationConsent } from '@/hooks/useLocationConsent'
import { useWeather } from '@/hooks/useWeather'

import { Conditional } from '../Conditional/Conditional'
import { WeatherCurrentWeather } from '../WeatherCurrentWeather/WeatherCurrentWeather'

export const Weather: FC<WeatherProps> = () => {
    const [locationConsent] = useLocationConsent()

    const { isInFlux } = useWeather()

    if (isInFlux) return <WeatherLoadingSpinner />

    return (
        <ErrorBoundaryWrapper handle='Weather'>
            <>
                <Conditional condition={zConsentStateUnknown.safeParse(locationConsent).success}>
                    <WeatherWaitingForConsent />
                    <WeatherConsentModal />
                </Conditional>
                <Conditional condition={zConsentStateDeclined.safeParse(locationConsent).success}>
                    <WeatherNoConsent />
                </Conditional>
                <Conditional condition={zConsentStateAccepted.safeParse(locationConsent).success}>
                    <WeatherCurrentWeather />
                </Conditional>
            </>
        </ErrorBoundaryWrapper>
    )
}

export default Weather
