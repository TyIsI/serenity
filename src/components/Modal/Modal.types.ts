import type { HTMLAttributes, JSX, ReactNode } from 'react'

import type { ModalIconStyle } from '@/components/ModalIcon/ModalIcon.types'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    title: string
    show: boolean
    onHide: () => void
    closeButton: boolean
    actions?: JSX.Element[]
    iconStyle?: ModalIconStyle
    role?: 'alertdialog' | 'dialog'
}
