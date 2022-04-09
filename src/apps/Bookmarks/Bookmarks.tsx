import React, { Component } from 'react'
import styles from './Bookmarks.module.css'

import { BookmarksProps, BookmarksState } from './Bookmarks.types'

class Bookmarks extends Component<BookmarksProps, BookmarksState> {
  render () {
    return (
      <div className={styles.Bookmarks}>
        <h3>Bookmarks</h3>
      </div>
    )
  }
}

export default Bookmarks
