import React, { Component } from 'react'

import { stateMachine } from 'pretty-state-machine'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { reorder } from 'src/lib/util'

import ToDoItem from './components/ToDoItem/ToDoItem'

import { TodoProps, TodoState } from './Todo.types'

import ToDo, { ToDoData } from './classes/ToDo.class'

import styles from './Todo.module.css'

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  border: isDragging && 'solid 1px white',
  borderRadius: '5px',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver && 'rgba(0, 0, 0, 0.1)'
})

class Todo extends Component<TodoProps, TodoState> {
  interval: any

  constructor (props: TodoProps) {
    super(props)

    this.state = {
      todolist: [],
      newTodoText: ''
    }

    this.onDragEnd = this.onDragEnd.bind(this)
  }

  componentDidMount () {
    this.setState({ todolist: stateMachine.get('todolist', []).map((todo: ToDoData) => ToDo.unserialize(todo)) })
  }

  componentDidUpdate (prevProps: TodoProps, prevState: any) {
    stateMachine.pub({ todolist: this.state.todolist.map(todo => todo.serialize()) })
  }

  removeItem (todo: ToDo) {
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

  newTodoTextHandler (newTodoText: string) {
    this.setState({ newTodoText })
  }

  newTodoKeyHandler (key: string) {
    switch (key) {
      case 'Enter':
        this.addTodoHandler()
        break
    }
  }

  addTodoHandler () {
    if (this.state.newTodoText.length === 0) {
      return
    }

    this.setState((prevState) => {
      const { todolist, newTodoText } = prevState

      if (todolist.map(todo => todo.text).indexOf(newTodoText) === -1) {
        todolist.push(new ToDo(newTodoText))
      }

      return { todolist, newTodoText: '' }
    })
  }

  onDragEnd (result: { destination: { index: number }; source: { index: number } }) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    this.setState((prevState) => {
      const todolist = reorder(
        prevState.todolist,
        result.source.index,
        result.destination.index
      )

      return { todolist }
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

        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided: any, snapshot: any) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {this.state.todolist.map((todo, index) => {
                  return (
                    <Draggable key={todo.id} draggableId={'' + todo.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          className="situational"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <ToDoItem todo={todo} onRemove={() => this.removeItem(todo)} onUpdate={(updatedToDo: ToDo) => this.updateItem(updatedToDo)} />
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Form.Group as={Row} className="mb-3">
          <Col sm={9}>
            <Form.Control name="newTodoText" value={this.state.newTodoText} onChange={(event) => this.newTodoTextHandler(event.target.value)} onKeyUp={(event) => this.newTodoKeyHandler(event.key)} />
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
