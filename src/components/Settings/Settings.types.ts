import { ClockModes, MeasurementsModes } from '../../config/frontend/service/index'

export interface SettingsProps { }

export interface SettingsState {
  clockMode: ClockModes
  measurementsMode: MeasurementsModes
}
