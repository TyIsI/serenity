import type { ReactNode } from 'react'

import type { ClockModes, MeasurementsModes } from '@/types/units'

export interface SettingsProps {
    children?: ReactNode
}

export interface SettingsState {
    clockMode: ClockModes
    measurementsMode: MeasurementsModes
    dualMode: boolean
}
