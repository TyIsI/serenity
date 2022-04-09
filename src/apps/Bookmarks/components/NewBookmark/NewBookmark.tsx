import React, { FC } from 'react'
import styles from './NewBookmark.module.css'

import { NewBookmarkProps } from './NewBookmark.types'

const NewBookmark: FC<NewBookmarkProps> = () => (
  <div className={styles.NewBookmark}>
    NewBookmark Component
  </div>
)

export default NewBookmark
