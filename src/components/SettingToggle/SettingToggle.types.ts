import type { ReactNode } from 'react'

export interface SettingToggleProps {
    children?: ReactNode
    width: number
    checked: boolean
    onLabel?: ReactNode
    offLabel?: ReactNode
    onChange: (checked: boolean) => void
    onStyle?: string
    offStyle?: string
    onHighlightStyle?: string
    onDefaultStyle?: string
    offHighlightStyle?: string
    offDefaultStyle?: string
}
