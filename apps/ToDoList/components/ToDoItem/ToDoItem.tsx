import React, { Component } from 'react'
import styles from './ToDoItem.module.css'

import { ToDoItemProps, ToDoItemState } from './ToDoItem.d'
import ToDo from '../../classes/ToDo.class'

import { Row, Col, Form } from 'react-bootstrap'

class ToDoItem extends Component<ToDoItemProps, ToDoItemState> {
  constructor (props: ToDoItemProps) {
    super(props)

    const todo: ToDo = props.todo || new ToDo('')

    this.state = {
      todo: todo,
      text: (todo != null && todo.text != null) ? todo.text : '',
      editing: false
    }
  }

  toggleEdit () {
    this.setState({ editing: !this.state.editing })
  }

  endEdit (event: any) {
    event.preventDefault()

    this.toggleEdit()

    this.setState((prevState) => {
      const { todo } = prevState

      todo.text = this.state.text

      this.props.onUpdate(todo)

      return { todo }
    })
  }

  handleTextChange (text: string) {
    this.setState({ text })
  }

  render () {
    return (
      <div className={styles.ToDoItem} key={this.state.todo.id}>
        <Row className="spacious">
          <Col xs={1}>
            <Form.Check id={'checkbox' + this.state.todo.id} defaultChecked type="checkbox" onClick={() => this.props.onRemove(this.state.todo.id)} />
          </Col>
          <Col>
            {this.state.editing === false
              ? (<span onClick={() => this.toggleEdit()}>{this.state.text}</span>)
              : (<Form.Control name="text" value={this.state.text} onChange={(event) => this.handleTextChange(event.target.value)} onBlur={(event) => this.endEdit(event)} />)
            }
          </Col>
        </Row>
      </div>
    )
  }
}

export default ToDoItem
