import React from 'react'
import ReactDOM from 'react-dom'
import PrivacyPolicy from './PrivacyPolicy'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PrivacyPolicy />, div)
  ReactDOM.unmountComponentAtNode(div)
})
