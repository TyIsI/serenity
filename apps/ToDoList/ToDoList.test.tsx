import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './ToDoList'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ToDoList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
