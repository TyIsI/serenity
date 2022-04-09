import React, { FC, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'

import { SideMenuProps } from './SideMenu.types'

import styles from './SideMenu.module.css'

const intro = `
Inspired by the [Momentum Dash](https://momentumdash.com/) extension for Chrome, I wanted to see if I could:
- create something that's similar to the extension, but more customizable, works in multiple browsers, and modifiable by the user
- learn some new-to-me technologies:
  - [Typescript](https://www.typescriptlang.org/)
  - [Next.js](https://nextjs.org/)
- do something with [Unsplash](https://unsplash.com)
`

const SideMenu: FC<SideMenuProps> = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <span className={styles.SideMenuButton} onClick={() => handleShow()}>
        <FontAwesomeIcon icon={['fas', 'bars']} size={'lg'} />
      </span>
      <Offcanvas className={styles.SideMenuCanvas} show={show} onHide={() => handleClose()}>
        <Offcanvas.Header>
          <Offcanvas.Title>Serenity Dashboard</Offcanvas.Title>
          <span onClick={() => handleClose()}><FontAwesomeIcon icon={['fas', 'times']} size={'lg'} /></span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ReactMarkdown>{intro}</ReactMarkdown>
          <hr />
          Weather powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideMenu
