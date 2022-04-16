import React from 'react'
import ReactDOM from 'react-dom'
import ToDoItem from './ToDoItem'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ToDoItem />, div)
  ReactDOM.unmountComponentAtNode(div)
})
