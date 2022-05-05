import stateMachine from 'pretty-state-machine'
import React, { FC, useEffect, useState } from 'react'

import { ClockProps } from './Clock.types'

import styles from './Clock.module.css'

const timeFormats:any[] = [
  { locale: 'en-GB', options: { hour: 'numeric', minute: 'numeric', second: 'numeric' } },
  { locale: 'en-US', options: { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true } }
]

const renderTime = (clockMode:number) => {
  const date = new Date()

  const { locale, options } = clockMode === 24 ? timeFormats[0] : timeFormats[1]

  return date.toLocaleTimeString(locale, options)
}

const Clock: FC<ClockProps> = () => {
  const [clockMode, setClockMode] = useState(24)
  const [clock, setClock] = useState(renderTime(clockMode))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setClockModeHandler = (update: { clockMode: number }) => {
    setClockMode(update.clockMode)
    setClock(renderTime(update.clockMode))
  }

  // @ts-ignore
  useEffect(() => {
    stateMachine.sub('clockMode', setClockModeHandler)

    return () => stateMachine.unsub('clockMode', setClockModeHandler)
  }, [setClockModeHandler])

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(renderTime(clockMode))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className={styles.Clock}><b>{clock}</b></div>
  )
}

export default Clock
