'use client'

import { useState, type FC } from 'react'

import type { WeatherConsentModalProps } from './WeatherConsentModal.types'

import { Modal } from '@/components/Modal/Modal'

import { zConsentStateAccepted, zConsentStateDeclined, zConsentStateUnknown } from '@/types/consent'

import { useGeoLocation } from '@/hooks/useGeoLocation'
import { useLocationConsent } from '@/hooks/useLocationConsent'

export const WeatherConsentModal: FC<WeatherConsentModalProps> = () => {
    const [locationConsent, setLocationConsent] = useLocationConsent()
    const [showConsentModal, setShowConsentModal] = useState<boolean>(zConsentStateUnknown.safeParse(locationConsent).success)

    const { getPosition } = useGeoLocation()

    return (
        <Modal
            show={showConsentModal}
            onHide={() => {
                setShowConsentModal(false)
            }}
            title={'Location Consent'}
            closeButton={true}
            actions={[
                <button
                    key='refuse'
                    data-variant='secondary'
                    className='mx-1 inline-flex w-full justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 sm:ml-3 sm:w-auto'
                    onClick={() => {
                        setLocationConsent(zConsentStateDeclined.value)
                    }}>
                    Decline
                </button>,
                <button
                    key='agree'
                    data-variant='primary'
                    className='mx-1 mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-500 sm:mt-0 sm:w-auto'
                    onClick={() => {
                        setLocationConsent(zConsentStateAccepted.value)
                        getPosition()
                    }}>
                    Agree
                </button>
            ].reverse()}>
            <div>
                Serenity needs your location to provide you with weather updates. To avoid tracking your specific location, Serenity strips the accuracy from
                your actual location to a maximum of 2 decimal places. Serenity also proxies the requests through the server to avoid IP address leakage to the
                weather information provider.
            </div>
        </Modal>
    )
}

export default WeatherConsentModal
