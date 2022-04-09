import React, { FC } from 'react'
import styles from './BookmarkItem.module.css'

import { BookmarkItemProps } from './BookmarkItem.types'

const BookmarkItem: FC<BookmarkItemProps> = () => (
  <div className={styles.BookmarkItem}>
    BookmarkItem Component
  </div>
)

export default BookmarkItem
