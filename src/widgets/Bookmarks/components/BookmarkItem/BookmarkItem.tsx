'use client'

import type { FC } from 'react'

import type { BookmarkItemProps } from './BookmarkItem.types'

export const BookmarkItem: FC<BookmarkItemProps> = ({ bookmark: { id, title, url } }) => (
    <div key={id} className='w-full' data-testid='Bookmark'>
        <a href={url}>{title}</a>
    </div>
)

export default BookmarkItem
