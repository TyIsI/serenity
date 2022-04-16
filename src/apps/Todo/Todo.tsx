import React, { Component } from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stateMachine } from 'pretty-state-machine'
import { Row, Col, Form, Button } from 'react-bootstrap'

import ToDoItem from './components/ToDoItem/ToDoItem'

import { TodoProps, TodoState } from './Todo.types'

import ToDo, { ToDoData } from './classes/ToDo.class'

import styles from './Todo.module.css'

class Todo extends Component<TodoProps, TodoState> {
  interval: any

  constructor (props: TodoProps) {
    super(props)

    this.state = {
      todolist: [],
      newTodoText: ''
    }
  }

  componentDidMount () {
    this.setState({ todolist: stateMachine.get('todolist', []).map((todo: ToDoData) => ToDo.unserialize(todo)) })
  }

  componentDidUpdate (prevProps: TodoProps, prevState: any) {
    stateMachine.pub({ todolist: this.state.todolist.map(todo => todo.serialize()) })
  }

  removeItem (todo:ToDo) {
    const idx = todo.id

    this.setState((prevState) => {
      let { todolist } = prevState

      todolist = todolist.filter((item) => item.id !== idx)

      return { todolist }
    })
  }

  updateItem (updatedToDo: ToDo) {
    this.setState((prevState) => {
      let { todolist } = prevState

      todolist = todolist.map((todo) => {
        return (todo.id === updatedToDo.id) ? updatedToDo : todo
      })

      return { todolist }
    })
  }

  newTodoTextHandler (newTodoText:string) {
    this.setState({ newTodoText })
  }

  addTodoHandler () {
    this.setState((prevState) => {
      const { todolist, newTodoText } = prevState

      if (todolist.map(todo => todo.text).indexOf(newTodoText) === -1) {
        todolist.push(new ToDo(newTodoText))
      }

      return { todolist, newTodoText: '' }
    })
  }

  render () {
    return (
      <div className={styles.Todo}>
        <Row>
          <Col>
            <h3>To-Do</h3>
          </Col>
        </Row>

        {this.state.todolist.map((todo) => {
          return (<ToDoItem key={todo.id} todo={todo} onRemove={() => this.removeItem(todo)} onUpdate={(updatedToDo: ToDo) => this.updateItem(updatedToDo)} />)
        })}

        <Form.Group as={Row} className="mb-3">
          <Col sm={9}>
            <Form.Control name="newTodoText" value={this.state.newTodoText} onChange={(event) => this.newTodoTextHandler(event.target.value)} />
          </Col>
          <Col sm={3}>
            <Button variant="light" onClick={() => this.addTodoHandler()}>Add</Button>
          </Col>
        </Form.Group>
      </div>
    )
  }
}

export default Todo
