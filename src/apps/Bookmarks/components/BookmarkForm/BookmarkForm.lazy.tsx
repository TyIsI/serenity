import React, { lazy, Suspense } from 'react'

import { BookmarkFormProps } from './BookmarkForm.types'

const LazyBookmarkForm = lazy(() => import('./BookmarkForm'))

const BookmarkForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & BookmarkFormProps) => (
  <Suspense fallback={null}>
    <LazyBookmarkForm {...props} />
  </Suspense>
)

export default BookmarkForm
