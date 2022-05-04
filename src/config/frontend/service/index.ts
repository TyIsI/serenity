import { stateMachine } from 'pretty-state-machine'

export type ClockModes = 12 | 24
export type MeasurementsModes = 'freedom' | 'federation'

export interface ConfigStoreType {
  clockMode: ClockModes
  measurementsMode: MeasurementsModes
  [key: string]: any
}

export class ConfigService {
  private store: ConfigStoreType

  constructor () {
    this.store = { clockMode: 24, measurementsMode: 'federation', ts: Date.now() }
    stateMachine.sub('config', (config: ConfigStoreType) => {
      console.log('config', config)
    })
    stateMachine.sub('clockMode', (clockMode) => {
      console.log('clockMode', clockMode)
    })
    stateMachine.sub('measurementsMode', (measurementsMode) => {
      console.log('measurementsMode', measurementsMode)
    })
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
