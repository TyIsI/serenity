import { stateMachine } from 'pretty-state-machine'

import { ClockModes, MeasurementsModes } from 'types/units'

export interface ConfigStoreType {
  clockMode: ClockModes
  measurementsMode: MeasurementsModes
  [key: string]: any
}

export class ConfigService {
  private store: ConfigStoreType

  constructor () {
    this.store = { clockMode: 24, measurementsMode: 'federation', ts: Date.now() }
  }

  refresh () {
    this.store = stateMachine.get('config', { clockMode: 24, measurementsMode: 'federation', ts: Date.now() })
  }

  get (key: string) {
    return this.store[key]
  }

  set (key: string, value: any) {
    this.store[key] = value
    this.store.ts = Date.now()

    stateMachine.pub({ config: this.store })
    stateMachine.pub({ [key]: value })
  }

  getClockMode () {
    return this.store.clockMode
  }

  setClockMode (clockMode: ClockModes) {
    this.set('clockMode', clockMode)
  }

  getMeasurementsMode () {
    return this.store.measurementsMode
  }

  setMeasurementsMode (measurementsMode: MeasurementsModes) {
    this.set('measurementsMode', measurementsMode)
  }
}

export const ConfigServiceInstance = new ConfigService()

export default ConfigServiceInstance
