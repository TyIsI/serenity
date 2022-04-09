import React from 'react'
import ReactDOM from 'react-dom'
import Bookmarks from './Bookmarks'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Bookmarks />, div)
  ReactDOM.unmountComponentAtNode(div)
})
