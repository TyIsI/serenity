import React, { FC, useState, useEffect } from 'react'

import { stateMachine } from 'pretty-state-machine'
import { ListGroup, Row, Col } from 'react-bootstrap'

import BookmarkForm from './components/BookmarkForm/BookmarkForm'

import { BookmarksProps } from './Bookmarks.types'
import Bookmark, { BookmarkData } from './classes/Bookmark.class'

import styles from './Bookmarks.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Conditional from 'components/Conditional/Conditional'

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
    stateMachine.pub({ bookmarks: bookmarks.map(bookmark => bookmark.serialize()) })
  }, [bookmarks])

  const toggleShowNewBookmark = () => setShowNewBookmark(!showNewBookmark)

  const addBookmark = (newBookmark: Bookmark) => {
    setBookmarks([...bookmarks, newBookmark])
    setNewBookmark(new Bookmark())
  }

  const updateBookmark = (updatedBookmark: Bookmark) => {
    setBookmarks(bookmarks.map((bookmark) => {
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

  return (
    <div className={styles.Bookmarks}>
      <h3>Bookmarks</h3>
      <hr />
      <ListGroup>
        {bookmarks.map((bookmark) => {
          return (
            <ListGroup.Item key={bookmark.id}>
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
                    <BookmarkForm bookmark={bookmark} onDelete={(removedBookmark: Bookmark) => removeBookmark(removedBookmark)} onSubmit={(updatedBookmark: Bookmark) => updateBookmark(updatedBookmark)} submitButtonText="Update" inlineSubmitButton={false} />
                  </Col>
                </Row>
              </Conditional>
            </ListGroup.Item>
          )
        })}
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
