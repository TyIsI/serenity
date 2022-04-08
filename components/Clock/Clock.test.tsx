import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './Clock'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Clock />, div)
  ReactDOM.unmountComponentAtNode(div)
})
