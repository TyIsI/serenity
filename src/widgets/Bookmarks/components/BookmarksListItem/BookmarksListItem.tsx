'use client'

import React, { useState, type FC } from 'react'

import type { BookmarksListItemProps } from './BookmarksListItem.types'

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Conditional } from '@/components/Conditional/Conditional'

import { Bookmark } from '../../classes/Bookmark.class'
import { BookmarkForm } from '../BookmarkForm/BookmarkForm'

export const BookmarksListItem: FC<BookmarksListItemProps> = ({ bookmark: { id, title, url }, onDelete, onSubmit }) => {
    const [editBookmark, setEditBookmark] = useState<boolean>(false)

    return (
        <>
            <div key={id} className='w-ful my-3' data-testid='Bookmark'>
                <a href={url}>{title}</a>
                <label>
                    <FontAwesomeIcon className='float-end h-6 w-6' icon={faEllipsisVertical} />
                    <input
                        className='hidden'
                        type='checkbox'
                        onChange={(event) => {
                            setEditBookmark(event.target.checked)

                            return true
                        }}
                        checked={editBookmark}
                    />
                </label>
            </div>
            <Conditional condition={editBookmark}>
                <div>
                    <BookmarkForm
                        bookmark={new Bookmark(title, url, id)}
                        onCancel={() => {
                            console.log('onCancel')
                        }}
                        onDelete={onDelete}
                        onSubmit={onSubmit}
                        submitButtonText='Update'
                        inlineSubmitButton={false}
                    />
                </div>
            </Conditional>
        </>
    )
}

export default BookmarksListItem
