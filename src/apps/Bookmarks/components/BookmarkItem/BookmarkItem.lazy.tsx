import React, { lazy, Suspense } from 'react';

const LazyBookmarkItem = lazy(() => import('./BookmarkItem'));

const BookmarkItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBookmarkItem {...props} />
  </Suspense>
);

export default BookmarkItem;
