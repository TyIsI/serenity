import React, { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import { Container, Row, Col } from 'react-bootstrap'
import classnames from 'classnames'
import { Random } from 'unsplash-js/dist/methods/photos/types'

import Clock from 'src/components/Clock/Clock'
import UnsplashCredit from 'src/unsplash/frontend/components/UnsplashCredit/UnsplashCredit'
import UnsplashFrontendService from 'src/unsplash/frontend/services/frontend'
import WeatherFrontendService from 'src/weather/frontend/services/frontend'
import PhotoTemplate from 'src/unsplash/util/PhotoTemplate'

import Todo from 'src/apps/Todo/Todo'
import Bookmarks from 'src/apps/Bookmarks/Bookmarks'
import SourceCredit from 'src/components/SourceCredit/SourceCredit'
import Menu from 'src/components/SideMenu/SideMenu'
import Weather from 'src/weather/frontend/components/Weather/Weather'

const Serenity: NextPage = () => {
  const [photo, setPhoto] = useState<Random>(PhotoTemplate)
  const [showTodo, toggleTodo] = useState(true)
  const [showBookmarks, toggleBookmarks] = useState(true)

  useEffect(() => {
    UnsplashFrontendService.start()
    UnsplashFrontendService.setHandler(setPhoto)
    WeatherFrontendService.start()

    return () => {
      UnsplashFrontendService.stop()
      WeatherFrontendService.stop()
    }
  }, [])

  return (
    <>
      <Container fluid>
        <Row className={classnames(['navbar', 'navbar-shadow', 'fixed-top'])}>
          <Col className="align-left" md={3} lg={2}>
            <span onClick={() => toggleTodo(!showTodo)}>Todo</span>
          </Col>

          <Col className="centered" md={6}>
            <Clock /> / <Weather />
          </Col>

          <Col className="align-right" md={3} lg={2}>
            <span onClick={() => toggleBookmarks(!showBookmarks)}>Bookmarks</span>
          </Col>
        </Row>

        <Row>
          <Col className="app-container fixed-left" xs={4}>
            {showTodo && (<Todo />)}
          </Col>

          <Col className="main-container">
            <div className="pivot">
            </div>
          </Col>

          <Col className="app-container fixed-right" xs={4}>
            {showBookmarks && (<Bookmarks />)}
          </Col>
        </Row>

        <Row className={classnames(['navbar', 'fixed-bottom'])}>
          <Col className="align-left">
            <Menu />
            &nbsp;
            <SourceCredit />
          </Col>

          <Col className="centered">
          </Col>

          <Col className="align-right">
            <UnsplashCredit key={photo.id} photo={photo} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Serenity
