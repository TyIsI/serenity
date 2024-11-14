import type { ReactNode } from 'react'

import type { Bookmark } from './classes/Bookmark.class'

export interface BookmarksProps {
    children?: ReactNode
}

export interface BookmarksState {
    bookmarks: Bookmark[]
    editBookmark: number
}
