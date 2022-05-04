import stateMachine from 'pretty-state-machine'
import React, { FC, useEffect, useState } from 'react'

import { ClockProps } from './Clock.types'

import styles from './Clock.module.css'

const renderTime = (clockMode:number) => {
  const date = new Date()

  const hours = ('' + ((clockMode === 24) ? date.getHours() : (date.getHours() % 12))).padStart(2, '0')
  const minutes = ('' + date.getMinutes()).padStart(2, '0')
  const seconds = ('' + date.getSeconds()).padStart(2, '0')

  return (clockMode === 24) ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds} ${date.getHours() > 12 ? 'PM' : 'AM'}`
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
