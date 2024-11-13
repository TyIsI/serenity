import type { ReactNode } from 'react'

import type { Bookmark } from '../../classes/Bookmark.class'
import type { BookmarkItemProps } from '../BookmarkItem/BookmarkItem.types'

export interface BookmarksListItemProps extends BookmarkItemProps {
    children?: ReactNode
    onCancel?: () => void
    onDelete?: (bookmark: Bookmark) => void
    onSubmit: (bookmark: Bookmark) => void
}
