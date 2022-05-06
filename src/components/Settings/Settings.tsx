import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import dynamic from 'next/dynamic'

import ConfigServiceInstance from 'src/config/frontend/service/index'

import { ClockModes, MeasurementsModes } from 'types/units'
import { SettingsProps, SettingsState } from './Settings.types'

import styles from './Settings.module.css'

const BootstrapSwitchButton = dynamic(
  () => import('bootstrap-switch-button-react'),
  {
    loading: () => <p>loading</p>,
    ssr: false // This line is important. It's what prevents server-side render
  }
)

class Settings extends Component<SettingsProps, SettingsState> {
  constructor (props: SettingsProps) {
    super(props)

    this.state = {
      clockMode: 24,
      measurementsMode: 'federation'
    }
  }

  componentDidMount () {
    ConfigServiceInstance.refresh()

    this.setState({
      clockMode: ConfigServiceInstance.getClockMode(),
      measurementsMode: ConfigServiceInstance.getMeasurementsMode()
    })
  }

  componentDidUpdate (prevProps: SettingsProps, prevState: SettingsState) {
    if (prevState.clockMode !== this.state.clockMode) ConfigServiceInstance.setClockMode(this.state.clockMode)
    if (prevState.measurementsMode !== this.state.measurementsMode) ConfigServiceInstance.setMeasurementsMode(this.state.measurementsMode)
  }

  setClockMode (clockMode: ClockModes) {
    this.setState({ clockMode })
  }

  setMeasurementsMode (measurementsMode: MeasurementsModes) {
    this.setState({ measurementsMode })
  }

  render () {
    return (
      <div className={styles.Settings}>
        <Row>
          <Col className={styles.SettingsLabel}>
            Clock Mode
          </Col>
          <Col>
            <BootstrapSwitchButton
              width={150}
              checked={this.state.clockMode === 24}
              onlabel='24'
              offlabel='12'
              onChange={(checked: boolean) => this.setClockMode(checked ? 24 : 12)}
              onstyle="primary"
              offstyle='danger'
            />
          </Col>
        </Row>
        <Row>
          <Col className={styles.SettingsLabel}>
            Measurements Mode
          </Col>
          <Col>
            <BootstrapSwitchButton
              width={150}
              checked={this.state.measurementsMode === 'federation'}
              onlabel='Federation'
              offlabel='Freedom'
              onChange={(checked: boolean) => this.setMeasurementsMode(checked ? 'federation' : 'freedom')}
              onstyle="primary"
              offstyle='danger'
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Settings
