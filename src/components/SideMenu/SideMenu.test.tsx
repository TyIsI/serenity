import React from 'react'
import ReactDOM from 'react-dom'
import SideMenu from './SideMenu'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SideMenu />, div)
  ReactDOM.unmountComponentAtNode(div)
})
