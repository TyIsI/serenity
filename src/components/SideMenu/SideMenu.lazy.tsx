import React, { lazy, Suspense } from 'react'

import { SideMenuProps } from './SideMenu.types'

const LazySideMenu = lazy(() => import('./SideMenu'))

const SideMenu = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & SideMenuProps) => (
  <Suspense fallback={null}>
    <LazySideMenu {...props} />
  </Suspense>
)

export default SideMenu
