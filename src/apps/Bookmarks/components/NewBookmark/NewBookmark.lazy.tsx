import React, { lazy, Suspense } from 'react';

const LazyNewBookmark = lazy(() => import('./NewBookmark'));

const NewBookmark = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNewBookmark {...props} />
  </Suspense>
);

export default NewBookmark;
