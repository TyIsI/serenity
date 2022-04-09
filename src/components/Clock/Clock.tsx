import React, { FC, useEffect, useState } from 'react'
import styles from './Clock.module.css'

import { ClockProps } from './Clock.types'

const renderTime = () => {
  const date = new Date()

  const hours = ('' + date.getHours()).padStart(2, '0')
  const minutes = ('' + date.getMinutes()).padStart(2, '0')
  const seconds = ('' + date.getSeconds()).padStart(2, '0')

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
