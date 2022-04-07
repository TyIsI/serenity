import React from 'react'
import ReactDOM from 'react-dom'
import UnsplashCredit from './UnsplashCredit'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UnsplashCredit />, div)
  ReactDOM.unmountComponentAtNode(div)
})
