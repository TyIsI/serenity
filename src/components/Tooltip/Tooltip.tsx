'use client'

import type { FC } from 'react'

import type { TooltipProps } from './Tooltip.types'

import { clsx } from 'clsx'

import styles from './Tooltip.module.css'

export const Tooltip: FC<TooltipProps> = ({ children, content }) => (
    <div className={styles.Tooltip} data-testid='Tooltip'>
        <div className={styles.HasTooltip}>
            <span className={clsx(styles.TooltipContent, 'top-12 rounded bg-gray-600 p-1 text-white shadow-lg transition duration-300 ease-out hover:ease-in')}>
                {content}
            </span>
            {children}
        </div>
    </div>
)

export default Tooltip
