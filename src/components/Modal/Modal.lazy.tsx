'use client'

import React, { type FC, lazy, Suspense, type JSX } from 'react'

import type { ModalProps } from './Modal.types'

const LazyModal = lazy(async () => await import('./Modal'))

type LazyProps = JSX.IntrinsicAttributes & ModalProps

const Modal: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyModal {...props} />
    </Suspense>
)

export default Modal
