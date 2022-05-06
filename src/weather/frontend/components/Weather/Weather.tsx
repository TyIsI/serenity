import React, { Component } from 'react'

import stateMachine from 'pretty-state-machine'
import { Spinner, OverlayTrigger, Tooltip } from 'react-bootstrap'

import WeatherConsentModal from 'src/components/WeatherConsentModal/WeatherConsentModal'

import { WeatherProps, WeatherState } from './Weather.types'

import styles from './Weather.module.css'

class Weather extends Component<WeatherProps, WeatherState> {
  constructor (props: WeatherProps | Readonly<WeatherProps>) {
    super(props)

    const weather = stateMachine.get('weather', { weather: { location: { name: '' }, current: { temp_c: 0, temp_f: 0, condition: { text: '', icon: '' } } } })
    const locationConsent = stateMachine.get('locationConsent', 0)

    this.state = {
      loading: weather.weather.location.name === '',
      weather: weather,
      measurementsMode: 'federation',
      locationConsent: locationConsent,
      showConsentModal: locationConsent === 0
    }
  }

  componentDidMount () {
    stateMachine.sub('weather', this.setState.bind(this))
    stateMachine.sub('measurementsMode', this.setState.bind(this))
  }

  componentWillUnmount () {
    stateMachine.unsub('weather', this.setState.bind(this))
    stateMachine.unsub('measurementsMode', this.setState.bind(this))
  }

  componentDidUpdate (prevProps: WeatherProps, prevState: WeatherState) {
    if (prevState.weather !== this.state.weather) {
      this.setState({ loading: false })
    }
  }

  setShowConsentModal (show: boolean) {
    show = show ?? false

    if (this.state.showConsentModal !== show) this.setState({ showConsentModal: show })
  }

  handleLocationConsent (consent: boolean) {
    console.log('handleLocationConsent', consent)

    if (consent) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const params = {
            coords: {
              latitude: parseFloat(parseFloat('' + position.coords.latitude).toFixed(3)),
              longitude: parseFloat(parseFloat('' + position.coords.longitude).toFixed(3))
            }
          }

          const result = await fetch('/api/weather', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          })

          const weather: Weather | undefined | unknown = await result.json()

          stateMachine.pub({ weather })
        })
      } else {
        console.error('Location Not Available')
      }
    }

    this.setState({ locationConsent: consent ? 1 : -1 })
    stateMachine.pub({ locationConsent: consent ? 1 : -1 })

    this.setShowConsentModal(false)
  }

  render () {
    if (this.state.locationConsent === 0) {
      return (
        <>
          <div className={styles.Weather} onClick={() => this.setShowConsentModal(true)}>
            <Spinner animation="border" variant="warning" size="sm" /> <b><i>Waiting for consent...</i></b>
          </div>
          <WeatherConsentModal
            consentHandler={(consent) => this.handleLocationConsent(consent)}
            showConsentModal={this.state.showConsentModal}
            showConsentModalHandler={(show) => this.setShowConsentModal(show)}
          />
        </>
      )
    }

    if (this.state.locationConsent === -1) {
      return (
        <>
          <div className={styles.Weather} onClick={() => this.setShowConsentModal(true)}>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}><b>Serenity is not tracking your location</b><br />Click to (re-)enable location updates</Tooltip>}><b><i>Weather is not available</i></b></OverlayTrigger>
          </div>
          <WeatherConsentModal
            showConsentModal={this.state.showConsentModal}
            consentHandler={(consent) => this.handleLocationConsent(consent)}
            showConsentModalHandler={(show) => this.setShowConsentModal(show)}
          />
        </>
      )
    }

    if (this.state.loading) {
      return (
        <div className={styles.Weather}>
          <Spinner animation="border" variant="warning" size="sm" /> <b><i>Loading weather...</i></b>
        </div>
      )
    }

    const weather = this.state.weather.weather

    const temp = this.state.measurementsMode === 'federation' ? weather.current.temp_c : weather.current.temp_f
    const tempUnit = this.state.measurementsMode === 'federation' ? 'C' : 'F'

    return (
      <>
      <div className={styles.Weather} onClick={() => this.setShowConsentModal(true)}>
        <b>{weather.location.name} / {temp}{tempUnit} - {weather.current.condition.text} <img alt={weather.current.condition.text} src={'https:' + weather.current.condition.icon} width={24} height={24} /></b>
        </div>
        <WeatherConsentModal
            consentHandler={(consent) => this.handleLocationConsent(consent)}
            showConsentModal={this.state.showConsentModal}
            showConsentModalHandler={(show) => this.setShowConsentModal(show)}
          />
      </>
    )
  }
}

export default Weather
