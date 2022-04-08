import React, { FC, useEffect, useState } from 'react'
import styles from './Clock.module.css'

import { ClockProps } from './Clock.d'

const renderTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${hours}:${minutes}:${seconds}`
}

const Clock: FC<ClockProps> = () => {
  const [clock, setClock] = useState(renderTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(renderTime())
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
