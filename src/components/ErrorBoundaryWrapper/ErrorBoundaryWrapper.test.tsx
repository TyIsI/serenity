import React from 'react'
import ReactDOM from 'react-dom'

import ErrorBoundaryWrapper from './ErrorBoundaryWrapper'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ErrorBoundaryWrapper />, div)
  ReactDOM.unmountComponentAtNode(div)
})
