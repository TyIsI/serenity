import React from 'react'
import ReactDOM from 'react-dom'
import Conditional from './Conditional'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Conditional />, div)
  ReactDOM.unmountComponentAtNode(div)
})
