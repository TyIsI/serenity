'use client'

import type { FC } from 'react'

import type { QuotesWidgetProps } from './QuotesWidget.types'

import { useRandomQuote } from '@/hooks/useRandomQuote'

export const QuotesWidget: FC<QuotesWidgetProps> = () => {
    const [quote] = useRandomQuote()

    return <div className='mx-auto max-w-fit rounded-t-lg bg-black/50 p-1 px-2 text-center italic'>{quote}</div>
}

export default QuotesWidget
