import React, { FC, useEffect, useState } from 'react'

import { WeatherProps } from './Weather.types'

import styles from './Weather.module.css'
import stateMachine from 'pretty-state-machine'

const Weather: FC<WeatherProps> = () => {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState({ current: { temp_c: 0, condition: { text: '', icon: '' } } })

  const updater = ({ weather }:{weather: {weather:{ current: { temp_c: 0, condition: { text: '', icon:'' } } }}}) => {
    setWeather(weather.weather)
    setLoading(false)
  }

  useEffect(() => {
    stateMachine.sub('weather', updater)

    return () => {
      stateMachine.unsub('weather', updater)
    }
  })

  if (loading) {
    return (
      <div className={styles.Weather}>
        Loading...
      </div>
    )
  }

  return (
    <div className={styles.Weather}>
      <b>{weather.current.temp_c}C - {weather.current.condition.text} <img alt={weather.current.condition.text} src={'https:' + weather.current.condition.icon} width={24} height={24} /></b>
    </div>
  )
}

export default Weather
