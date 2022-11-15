import React, { Component } from 'react'

import { Button, Col, Form, Row } from 'react-bootstrap'

import Conditional from 'components/Conditional/Conditional'

import Bookmark from '../../classes/Bookmark.class'

import { BookmarkFormProps, BookmarkFormState } from './BookmarkForm.types'

// import styles from './BookmarkForm.module.css'

class BookmarkForm extends Component<BookmarkFormProps, BookmarkFormState> {
  constructor (props: BookmarkFormProps) {
    super(props)

    this.state = {
      bookmark: props.bookmark ?? new Bookmark(),
      title: props.bookmark.title ?? '',
      url: props.bookmark.url ?? '',
      inlineSubmitButton: props.inlineSubmitButton ?? true,
      submitButtonText: props.submitButtonText ?? 'Add'
    }
  }

  changeHandler (event: any) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleKeyPress (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    event.preventDefault()

    switch (event.key) {
      case 'Enter':
        this.onSubmitHandler()
        break
      case 'Escape':
        this.setState({
          title: this.props.bookmark.title ?? '',
          url: this.props.bookmark.url ?? ''

        })

        if (this.props.onCancel) { this.props.onCancel() }
        break
    }
  }

  onDeleteHandler (): void {
    if (this.props.onDelete) this.props.onDelete(this.state.bookmark)
  }

  onSubmitHandler (): void {
    if (this.state.title.length === 0 || this.state.url.length === 0) {
      return
    }

    if (this.props.onSubmit) {
      const bookmark = this.state.bookmark

      bookmark.title = this.state.title
      bookmark.url = this.state.url

      this.props.onSubmit(this.state.bookmark)
    }
  }

  handleClose () {
    this.setState({ showErrorModal: false })
  }

  render () {
    return (
      <div className="spacious">
        <Form.Group as={Row}>
          <Col>
            <Form.Control name="url" value={this.state.url} onChange={(event) => this.changeHandler(event)} placeholder="url" onKeyUp={(e) => this.handleKeyPress(e)} />
          </Col>
        </Form.Group>
        {this.state.inlineSubmitButton === true
          ? (
            <Form.Group as={Row} className="spacious">
              <Col sm={9}>
                <Form.Control name="title" value={this.state.title} onChange={(event) => this.changeHandler(event)} placeholder="title" onKeyUp={(e) => this.handleKeyPress(e)} />
              </Col>
              <Col sm={3}>
                <Button variant="light" onClick={() => this.onSubmitHandler()}>{this.state.submitButtonText ?? 'Add'}</Button>
              </Col>
            </Form.Group>
            )
          : (
            <>
              <Form.Group as={Row} className="spacious">
                <Col>
                  <Form.Control name="title" value={this.state.title} onChange={(event) => this.changeHandler(event)} placeholder="title" onKeyUp={(e) => this.handleKeyPress(e)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Col>
                  <Conditional condition={this.props.onDelete != null}>
                    <Button className="pull-left" variant="danger" onClick={() => this.onDeleteHandler()}>Delete</Button>&nbsp;
                  </Conditional>
                  <Button variant="success" onClick={() => this.onSubmitHandler()}>{this.state.submitButtonText ?? 'Add'}</Button>
                </Col>
              </Form.Group>
            </>
            )
        }
      </div>
    )
  }
}

export default BookmarkForm
