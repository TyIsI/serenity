'use client'

import { type GeolocatedResult, useGeolocated } from 'react-geolocated'

import { zConsentStateAccepted } from '@/types/consent'

import { useLocationConsent } from './useLocationConsent'

export const useGeoLocation = (): GeolocatedResult => {
    const [locationConsent] = useLocationConsent()

    const geoLocated = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false
        },
        userDecisionTimeout: 5000,
        suppressLocationOnMount: !zConsentStateAccepted.safeParse(locationConsent).success
    })

    return geoLocated
}
