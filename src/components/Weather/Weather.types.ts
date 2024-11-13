import type { ReactNode } from 'react'

import type { ConsentTypes } from '@/types/consent'
import type { MeasurementsModes } from '@/types/units'
import type { WeatherObject } from '@/types/weather'

export interface WeatherProps {
    children?: ReactNode
}

export interface WeatherState {
    loading: boolean
    weather: WeatherObject
    measurementsMode: MeasurementsModes
    dualMode: boolean
    locationConsent: ConsentTypes
    showConsentModal: boolean
}
