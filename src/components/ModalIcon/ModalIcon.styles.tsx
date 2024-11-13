'use client'

import type { ModalStyle } from './ModalIcon.types'

import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon'
import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'

export const ModalAlertStyle: ModalStyle = {
    icon: <ExclamationTriangleIcon className='h-6 w-6 text-red-600' aria-hidden='true' />,
    bgClassName: 'bg-red-100'
}

export const ModalInfoStyle: ModalStyle = {
    icon: <InformationCircleIcon className='h-6 w-6 text-blue-600' aria-hidden='true' />,
    bgClassName: 'bg-blue-100'
}

export const ModalSuccessStyle: ModalStyle = {
    icon: <CheckCircleIcon className='h-6 w-6 text-green-600' aria-hidden='true' />,
    bgClassName: 'bg-green-100'
}

export const ModalFailedStyle: ModalStyle = {
    icon: <ExclamationCircleIcon className='h-6 w-6 text-red-500' aria-hidden='true' />,
    bgClassName: 'bg-red-100'
}
