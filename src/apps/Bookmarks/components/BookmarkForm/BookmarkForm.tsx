import React, { FC, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import Conditional from 'components/Conditional/Conditional'

import { BookmarkFormProps } from './BookmarkForm.types'
import Bookmark from '../../classes/Bookmark.class'

// import styles from './BookmarkForm.module.css'

const BookmarkForm: FC<BookmarkFormProps> = ({ bookmark, submitButtonText, inlineSubmitButton, onSubmit, onDelete }) => {
  inlineSubmitButton = inlineSubmitButton ?? true
  submitButtonText = submitButtonText ?? 'Add'

  const onDeleteHandler = (bookmark: Bookmark) => { if (onDelete) { onDelete(bookmark) } }

  const [title, setTitle] = React.useState(bookmark.title ?? '')
  const [url, setUrl] = React.useState(bookmark.url ?? '')

  useEffect(() => {
    bookmark.title = title
    bookmark.url = url
  }, [url, title, bookmark])

  useEffect(() => {
    setTitle(bookmark.title ?? '')
    setUrl(bookmark.url ?? '')
  }, [bookmark])

  return (
    <div className="spacious">
      <Form.Group as={Row}>
        <Col>
          <Form.Control value={url} onChange={(event) => setUrl(event.target.value)} placeholder="url" onKeyPress={(e) => { if (e.key === 'Enter') onSubmit(bookmark) }} />
        </Col>
      </Form.Group>
      {inlineSubmitButton === true
        ? (
          <Form.Group as={Row} className="spacious">
            <Col sm={9}>
              <Form.Control value={title} onChange={(event) => setTitle(event.target.value)} placeholder="title" onKeyPress={(e) => { if (e.key === 'Enter') onSubmit(bookmark) }} />
            </Col>
            <Col sm={3}>
              <Button variant="light" onClick={() => onSubmit(bookmark)}>{submitButtonText ?? 'Add'}</Button>
            </Col>
          </Form.Group>
          )
        : (
          <>
            <Form.Group as={Row} className="spacious">
              <Col>
                <Form.Control value={title} onChange={(event) => setTitle(event.target.value)} placeholder="title" onKeyPress={(e) => { if (e.key === 'Enter') onSubmit(bookmark) }} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} >
              <Col>
                <Conditional condition={onDelete != null}>
                  <Button className="pull-left" variant="danger" onClick={() => onDeleteHandler(bookmark)}>Delete</Button>&nbsp;
                </Conditional>
                <Button variant="success" onClick={() => onSubmit(bookmark)}>{submitButtonText ?? 'Add'}</Button>
              </Col>
            </Form.Group>
          </>
          )
      }
    </div>
  )
}

export default BookmarkForm
