import { ClockModes, MeasurementsModes } from 'types/units'

export interface SettingsProps { }

export interface SettingsState {
  clockMode: ClockModes
  measurementsMode: MeasurementsModes
}
