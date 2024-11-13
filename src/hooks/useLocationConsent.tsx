'use client'

import { useEffect } from 'react'

import { zConsentStateAccepted, zConsentStateDeclined, zConsentStateUnknown, type ConsentTypes } from '@/types/consent'

import { useStateMachine } from './useStateMachine'

export const useLocationConsent = (): [ConsentTypes, (val: ConsentTypes) => void] => {
    const [locationConsent, setLocationConsent] = useStateMachine<ConsentTypes>('locationConsent', zConsentStateUnknown.value)

    useEffect(() => {
        if (!zConsentStateAccepted.safeParse(locationConsent).success && 'permissions' in navigator) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then((result) => {
                    switch (result.state) {
                        case 'denied':
                            setLocationConsent(zConsentStateDeclined.value)
                            break
                        case 'granted':
                            setLocationConsent(zConsentStateAccepted.value)
                            break
                        default:
                            setLocationConsent(zConsentStateUnknown.value)
                            break
                    }
                })
                .catch((e) => {
                    console.error('Error updating the permissions', e)
                })
        }
    }, [])

    return [locationConsent, setLocationConsent]
}
