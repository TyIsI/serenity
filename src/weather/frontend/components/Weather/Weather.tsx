import React, { Component } from 'react'

import stateMachine from 'pretty-state-machine'
import { Spinner } from 'react-bootstrap'

import { WeatherProps, WeatherState } from './Weather.types'

import styles from './Weather.module.css'

class Weather extends Component<WeatherProps, WeatherState> {
  constructor (props: WeatherProps | Readonly<WeatherProps>) {
    super(props)

    const weather = stateMachine.get('weather', { weather: { location: { name: '' }, current: { temp_c: 0, condition: { text: '', icon: '' } } } })

    this.state = {
      loading: weather.weather.location.name === '',
      weather: weather
    }
  }

  componentDidMount () {
    stateMachine.sub('weather', this.setState.bind(this))
  }

  componentWillUnmount () {
    stateMachine.unsub('weather', this.setState.bind(this))
  }

  componentDidUpdate (prevProps: WeatherProps, prevState: WeatherState) {
    if (prevState.weather !== this.state.weather) {
      this.setState({ loading: false })
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div className={styles.Weather}>
          <Spinner animation="border" variant="warning" size="sm" /> <b><i>Loading weather...</i></b>
        </div>
      )
    }

    const weather = this.state.weather.weather

    return (
      <div className={styles.Weather}>
        <b>{weather.location.name} / {weather.current.temp_c}C - {weather.current.condition.text} <img alt={weather.current.condition.text} src={'https:' + weather.current.condition.icon} width={24} height={24} /></b>
      </div>
    )
  }
}

export default Weather
