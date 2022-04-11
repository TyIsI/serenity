import React from 'react'
import ReactDOM from 'react-dom'
import BookmarkForm from './BookmarkForm'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BookmarkForm
    handleSubmit={(event: any): void => { }}
    onTitleChange={(event: any): void => { }}
    onUrlChange={(event: any): void => { }} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
