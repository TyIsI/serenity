'use client'

import type { FC } from 'react'

import type { QuotesWidgetProps } from './QuotesWidget.types'

import { useRandomQuote } from '@/hooks/useRandomQuote'

export const QuotesWidget: FC<QuotesWidgetProps> = () => {
    const [quote] = useRandomQuote()

    return <div className='bottom-0 mx-auto min-h-7 max-w-fit text-balance rounded-t-lg bg-black/50 px-2 text-center italic'>{quote}</div>
}

export default QuotesWidget
