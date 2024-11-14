'use client'

import type { FC } from 'react'

import type { ModalIconProps } from './ModalIcon.types'

import { clsx } from 'clsx'

import { ModalAlertStyle, ModalFailedStyle, ModalInfoStyle, ModalSuccessStyle } from './ModalIcon.styles'

export const ModalIcon: FC<ModalIconProps> = ({ style }) => {
    style ??= 'default'

    let iconStyle = ModalInfoStyle

    switch (style) {
        case 'alert':
            iconStyle = ModalAlertStyle
            break
        case 'info':
            iconStyle = ModalInfoStyle
            break
        case 'success':
            iconStyle = ModalSuccessStyle
            break
        case 'failed':
            iconStyle = ModalFailedStyle
            break
    }

    return (
        <div className={clsx('mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10', iconStyle.bgClassName)}>
            {iconStyle.icon}
        </div>
    )
}

export default ModalIcon
