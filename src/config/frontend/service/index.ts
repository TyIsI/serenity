import { stateMachine } from 'pretty-state-machine'

import { ClockModes, MeasurementsModes } from 'src/types/units'

export interface ConfigStoreType {
  clockMode: ClockModes
  measurementsMode: MeasurementsModes
  dualMode: boolean
  [key: string]: any
}

const defaultConfig: ConfigStoreType = {
  clockMode: 24,
  measurementsMode: 'federation',
  dualMode: false,
  ts: Date.now()
}

export class ConfigService {
  private store: ConfigStoreType

  constructor () {
    this.store = defaultConfig
  }

  refresh () {
    this.store = stateMachine.get('config', defaultConfig)
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

  getDualMode () {
    return this.store.dualMode
  }

  setDualMode (dualMode: boolean) {
    this.set('dualMode', dualMode)
  }
}

export const ConfigServiceInstance = new ConfigService()

export default ConfigServiceInstance
