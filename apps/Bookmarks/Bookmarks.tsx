import React, { FC } from 'react'
import styles from './Bookmarks.module.css'

interface BookmarksProps {}

const Bookmarks: FC<BookmarksProps> = () => (
  <div className={styles.Bookmarks}>
    Bookmarks Component
  </div>
)

export default Bookmarks
