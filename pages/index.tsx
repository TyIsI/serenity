import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap'
import classnames from 'classnames'
import { Random } from 'unsplash-js/dist/methods/photos/types'

import Clock from 'components/Clock/Clock'
import UnsplashCredit from 'components/UnsplashCredit/UnsplashCredit'
import FrontendService from 'lib/unsplash/services/frontend/index'
import PhotoTemplate from 'lib/unsplash/templates/PhotoTemplate'

import ToDoList from 'apps/ToDoList/ToDoList'
import Bookmarks from 'apps/Bookmarks/Bookmarks'
import SourceCredit from 'components/SourceCredit/SourceCredit'

FrontendService.start()

const Serenity: NextPage = () => {
  const [photo, setPhoto] = useState<Random>(PhotoTemplate)
  const [showTodo, toggleTodo] = useState(true)
  const [showBookmarks, toggleBookmarks] = useState(true)

  FrontendService.setHandler(setPhoto)

  return (
    <>
      <Container fluid>
        <Row className={classnames(['navbar', 'navbar-shadow', 'fixed-top'])}>
          <Col className="align-left">
            <span onClick={() => toggleTodo(!showTodo)}>Todo</span>
          </Col>
          <Col className="centered">
            <Clock />
          </Col>
          <Col className="align-right">
            <span onClick={() => toggleBookmarks(!showBookmarks)}>Bookmarks</span>
          </Col>
        </Row>

        <Row>
          <Col className="app-container fixed-left" xs={4}>
            {showTodo && (<ToDoList />)}
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
            <SourceCredit />
          </Col>
          <Col className="centered">
            Bottom Navbar
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
