import { useMemo } from 'react'

import { Bookmark, type BookmarkData } from '@/widgets/Bookmarks/classes/Bookmark.class'

import { useStateMachine } from './useStateMachine'

export const useBookmarkList = (): [Bookmark[], (val: Bookmark[]) => void] => {
    const [storedBookmarks, setStoredBookmarks] = useStateMachine<BookmarkData[]>('bookmarks', [])

    const setBookmarkList = (bookmarks: Bookmark[]): void => {
        setStoredBookmarks(bookmarks.map((e) => e.serialize()))
    }

    const bookmarkList = useMemo(() => {
        return storedBookmarks.map((s) => Bookmark.unserialize(s))
    }, [storedBookmarks])

    return [bookmarkList, setBookmarkList]
}
