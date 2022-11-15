import { FC, SetStateAction, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stateMachine } from 'pretty-state-machine'
import { DragDropContext, Draggable, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd'
import { Col, ListGroup, Row } from 'react-bootstrap'

import Conditional from 'components/Conditional/Conditional'
import BookmarkForm from './components/BookmarkForm/BookmarkForm'

import { reorder } from 'lib/util'

import Bookmark, { BookmarkData } from './classes/Bookmark.class'

import { BookmarksProps } from './Bookmarks.types'

import styles from './Bookmarks.module.css'

const getItemStyle = (isDragging: any, draggableStyle: any) => {
  return ({
    border: isDragging && 'solid 1px white',
    borderRadius: isDragging && '0.25rem',

    // styles we need to apply on draggables
    ...draggableStyle
  })
}

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver && 'rgba(0, 0, 0, 0.1)',
  borderRadius: '.25rem'
})

const Bookmarks: FC<BookmarksProps> = (props: BookmarksProps) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(stateMachine.get('bookmarks', []).map(({ id, title, url }: BookmarkData) => new Bookmark(title, url, id)))
  const [editBookmark, setEditBookmark] = useState<number>(0)
  const [showNewBookmark, setShowNewBookmark] = useState<boolean>(false)
  const [newBookmark, setNewBookmark] = useState<Bookmark>(new Bookmark())

  const toggleEditBookmark = (id: number) => {
    if (editBookmark === id) {
      setEditBookmark(0)
    } else {
      setEditBookmark(id)
    }
  }

  useEffect(() => {
    // @ts-ignore
    const bookmarksData:BookmarkData[] = bookmarks.map((bookmark) => bookmark.serialize())

    stateMachine.pub({ bookmarks: bookmarksData })
  }, [bookmarks])

  const toggleShowNewBookmark = () => setShowNewBookmark(!showNewBookmark)

  const addBookmark = (newBookmark: Bookmark) => {
    setBookmarks([...bookmarks, newBookmark])
    setNewBookmark(new Bookmark())
  }

  const updateBookmark = (updatedBookmark: Bookmark) => {
    setBookmarks(bookmarks.map((bookmark:Bookmark) => {
      if (bookmark.id === updatedBookmark.id) {
        return updatedBookmark
      } else {
        return bookmark
      }
    }))

    setEditBookmark(0)
  }

  const removeBookmark = (removedBookmark: Bookmark) => {
    setBookmarks(
      bookmarks
        .filter(
          (bookmark) =>
            bookmark.id !== removedBookmark.id
        )
    )
  }

  const cancelEditBookmark = () => {
    setEditBookmark(0)
  }

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (result.destination === undefined || result.destination.index === undefined) {
      return
    }

    const srcIndex = result?.source?.index ?? 0
    const dstIndex = result?.destination?.index ?? 0

    const reorderedBookmarks:SetStateAction<any[]> = reorder(
      bookmarks,
      srcIndex,
      dstIndex
    )

    setBookmarks(reorderedBookmarks)
  }

  return (
    <div className={styles.Bookmarks}>
      <h3>Bookmarks</h3>
      <hr />
      <ListGroup>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided: any, snapshot: any) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {bookmarks.map((bookmark, index) => {
                  return (
                    <Draggable key={bookmark.id} draggableId={'' + bookmark.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <ListGroup.Item className={styles.BookmarksItem}>
                            <Row>
                              <Col xs={9} className={styles.BookmarksLinkLeft}>
                                <a href={bookmark.url}>{bookmark.title}</a>
                              </Col>
                              <Col xs={3}>
                                <span onClick={() => toggleEditBookmark(bookmark.id)} className={styles.BookmarkMenuButton}>
                                  <FontAwesomeIcon icon={['fas', 'ellipsis-vertical']} />
                                </span>
                              </Col>
                            </Row>
                            <Conditional condition={editBookmark === bookmark.id}>
                              <Row>
                                <Col>
                                  <BookmarkForm bookmark={bookmark} onCancel={() => cancelEditBookmark()} onDelete={(removedBookmark: Bookmark) => removeBookmark(removedBookmark)} onSubmit={(updatedBookmark: Bookmark) => updateBookmark(updatedBookmark)} submitButtonText="Update" inlineSubmitButton={false} />
                                </Col>
                              </Row>
                            </Conditional>
                          </ListGroup.Item>

                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </ListGroup>
      <hr />
      <Row>
        <Col>
          <span className="pull-right" onClick={() => toggleShowNewBookmark()}><FontAwesomeIcon icon={['fas', (showNewBookmark === true ? 'times' : 'plus')]} /></span>
        </Col>
      </Row>

      {showNewBookmark === true
        ? (
          <BookmarkForm bookmark={newBookmark} onSubmit={(bookmark) => addBookmark(bookmark)} submitButtonText="Add" />
          )
        : null}

    </div>
  )
}

export default Bookmarks
