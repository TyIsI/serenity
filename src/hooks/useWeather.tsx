'use client'

import { useMemo } from 'react'

import useSWR from 'swr'

import { weatherFetcher } from '@/lib/fetcher'

import { zConsentStateAccepted } from '@/types/consent'
import { type Weather, type WeatherCacheEntry, zCoords } from '@/types/weather'

import { useGeoLocation } from './useGeoLocation'
import { useLocationConsent } from './useLocationConsent'

interface UseWeatherReturn {
    weather?: Weather
    isInFlux: boolean
    error?: unknown
}

export const useWeather = (): UseWeatherReturn => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeoLocation()

    const [locationConsent] = useLocationConsent()

    const enableUpdates = useMemo(() => {
        const haveCoords = zCoords.safeParse(coords).success

        return zConsentStateAccepted.safeParse(locationConsent).success && isGeolocationAvailable && isGeolocationEnabled && haveCoords
    }, [locationConsent, isGeolocationAvailable, isGeolocationEnabled, coords])

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, error, isLoading, isValidating } = useSWR<WeatherCacheEntry>(
        [enableUpdates ? '/api/weather' : null, enableUpdates ? coords : null],
        async ([_resource, coords]) => {
            // @ts-expect-error is not undefined at this point
            return (await weatherFetcher(coords)) as WeatherCacheEntry
        },
        {
            refreshInterval: 1800000
        }
    )

    return { weather: data?.weather, error, isInFlux: isLoading || isValidating }
}
