'use client'

import type { FC } from 'react'

import type { WidgetContainerProps } from './WidgetContainer.types'

import { clsx } from 'clsx'

import { useIsReady } from '@/hooks/useIsReady'
import { useStateMachine } from '@/hooks/useStateMachine'

import { Conditional } from '../Conditional/Conditional'

export const WidgetContainer: FC<WidgetContainerProps> = ({ className, widget, children }) => {
    const [showWidget] = useStateMachine<boolean>(`show${widget}`, false)

    const isReady = useIsReady()

    return (
        <Conditional condition={isReady && showWidget}>
            <div
                className={clsx(
                    'transition-500 hover:box-shadow-nav fixed bottom-10 top-10 h-auto w-96 overflow-auto px-3 text-white/25 opacity-50',
                    showWidget ? 'app-widget hover:bg-black/50 hover:text-white hover:opacity-100 hover:drop-shadow-nav' : null,
                    className
                )}
                data-testid='WidgetContainer'>
                {children}
            </div>
        </Conditional>
    )
}

export default WidgetContainer
