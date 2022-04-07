import React, { lazy, Suspense } from 'react'

const LazyToDoList = lazy(() => import('./ToDoList'))

const ToDoList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyToDoList {...props} />
  </Suspense>
)

export default ToDoList
