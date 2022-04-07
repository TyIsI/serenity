import React, { lazy, Suspense } from 'react'
import { ToDoItemProps } from './ToDoItem.d'

const LazyToDoItem = lazy(() => import('./ToDoItem'))

const ToDoItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & ToDoItemProps) => (
  <Suspense fallback={null}>
    <LazyToDoItem {...props} />
  </Suspense>
)

export default ToDoItem
