import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import classnames from 'classnames'
import { Col, Container, Row } from 'react-bootstrap'
import { Random } from 'unsplash-js/dist/methods/photos/types'

import Bookmarks from 'apps/Bookmarks/Bookmarks'
import Todo from 'apps/Todo/Todo'

import Clock from 'components/Clock/Clock'
import Menu from 'components/SideMenu/SideMenu'
import SourceCredit from 'components/SourceCredit/SourceCredit'

import UnsplashCredit from 'unsplash/frontend/components/UnsplashCredit/UnsplashCredit'
import UnsplashFrontendService from 'unsplash/frontend/services/frontend'
import PhotoTemplate from 'unsplash/util/PhotoTemplate'

import Weather from 'weather/frontend/components/Weather/Weather'
import WeatherFrontendService from 'weather/frontend/services/frontend'

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
