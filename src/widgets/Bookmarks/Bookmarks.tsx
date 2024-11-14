'use client'

import { type FC, useEffect, useState } from 'react'

import type { BookmarksProps } from './Bookmarks.types'

import { DndContext, type DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stateMachine } from 'pretty-state-machine'

import { Draggable } from '@/components/Draggable/Draggable'
import { ErrorBoundaryWrapper } from '@/components/ErrorBoundaryWrapper/ErrorBoundaryWrapper'

import { sensorOpts } from '@/lib/constants'

import { useBookmarkList } from '@/hooks/useBookmarksList'

import { Bookmark, type BookmarkData } from './classes/Bookmark.class'
import { BookmarkForm } from './components/BookmarkForm/BookmarkForm'
import { BookmarksListItem } from './components/BookmarksListItem/BookmarksListItem'

export const Bookmarks: FC<BookmarksProps> = () => {
    const [bookmarks, setBookmarks] = useBookmarkList()
    const [showNewBookmark, setShowNewBookmark] = useState<boolean>(false)
    const [newBookmark, setNewBookmark] = useState<Bookmark>(new Bookmark())

    const [activeId, setActiveId] = useState<string | number | null>(null)

    const mouseSensor = useSensor(MouseSensor, sensorOpts)
    const touchSensor = useSensor(TouchSensor, sensorOpts)

    const sensors = useSensors(mouseSensor, touchSensor)

    useEffect(() => {
        const bookmarksData: BookmarkData[] = bookmarks.map((bookmark) => bookmark.serialize())

        stateMachine.pub({ bookmarks: bookmarksData })
    }, [bookmarks])

    const toggleShowNewBookmark = (): void => {
        setShowNewBookmark(!showNewBookmark)
    }

    const addBookmarkHandler = (newBookmark: Bookmark): void => {
        setNewBookmark(new Bookmark())
        setBookmarks([...bookmarks, newBookmark])
    }

    const updatedBookmarkHandler = (updatedBookmark: Bookmark): void => {
        setBookmarks(
            bookmarks.reduce<Bookmark[]>((c, e) => {
                c.push(e.id === updatedBookmark.id ? updatedBookmark : e)
                return c
            }, [])
        )
        setNewBookmark(new Bookmark())
    }

    const removeBookmarkHandler = (bookmark: Bookmark): void => {
        setBookmarks(bookmarks.filter((b) => b.id !== bookmark.id))
    }

    const handleDragStart = (event: DragEndEvent): void => {
        setActiveId(event.active.id)
    }

    const handleDragEnd = (_event: DragEndEvent): void => {
        setActiveId(null)
    }

    return (
        <ErrorBoundaryWrapper handle={'Bookmarks'}>
            <div className='flex flex-col'>
                <div className='spacious'>
                    <h3 className='pull-right'>Bookmarks</h3>
                </div>

                <div className='px-1'>
                    <hr />
                </div>

                <div>
                    <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
                        {bookmarks
                            .filter((b) => b.id !== activeId)
                            .map((bookmark) => (
                                <Draggable key={`bookmark-${bookmark.id}`}>
                                    <BookmarksListItem bookmark={bookmark} onDelete={removeBookmarkHandler} onSubmit={updatedBookmarkHandler} />
                                </Draggable>
                            ))}
                    </DndContext>
                </div>

                <div className='px-1'>
                    <hr />
                </div>

                <div className='grid'>
                    <button
                        className='pull-right'
                        onClick={() => {
                            toggleShowNewBookmark()
                        }}>
                        <FontAwesomeIcon icon={showNewBookmark ? faTimes : faPlus} />
                    </button>
                </div>

                {showNewBookmark ? (
                    <BookmarkForm
                        bookmark={newBookmark}
                        onSubmit={(bookmark) => {
                            addBookmarkHandler(bookmark)
                        }}
                        submitButtonText='Add'
                    />
                ) : null}
            </div>
        </ErrorBoundaryWrapper>
    )
}

export default Bookmarks
