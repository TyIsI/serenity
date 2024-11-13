import type { ReactNode } from 'react'

import type { BookmarkData } from '../../classes/Bookmark.class.js'

export interface BookmarkItemProps {
    children?: ReactNode
    bookmark: BookmarkData
}
