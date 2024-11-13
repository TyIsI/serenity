import type { JSX } from 'react'

export type ModalIconStyle = 'default' | 'alert' | 'info' | 'success' | 'failed'

export interface ModalIconProps {
    style?: ModalIconStyle
}

export interface ModalStyle {
    icon: JSX.Element
    bgClassName: string
}
