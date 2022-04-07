import React, { lazy, Suspense } from 'react'

const LazyBookmarks = lazy(() => import('./Bookmarks'))

const Bookmarks = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBookmarks {...props} />
  </Suspense>
)

export default Bookmarks
