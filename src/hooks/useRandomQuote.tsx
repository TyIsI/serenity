'use client'

import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'

import { frontendConfig } from '@/config/frontend'

const quotes = [
    "It's always worse than it looks.",
    "Don't worry too much about what others are thinking about you! They're too busy worrying about what everyone else is thinking about them!",
    "If at first you don't succeed, use force. If that doesn't work, use more force. If it breaks, it needed replacement anyway.",
    "In this world, there are very few things that a good cup of tea, a good glass of whisky, duct tape, WD-40, a hammer or a lobotomy can't fix.",
    "When it comes down to it, everything has a 50/50 chance. Either it will work or it won't.",
    "Given that in an infinite universe with inifite time everything logical is bound to happen, there's a certain amount of improbable things that also fall squarely in the main area of the bell curve.",
    'Einstein knew a lot of things and he doubted a lot of things. One of them being whether human stupidity is infinite or not.',
    'Always remember that in the Venn diagram of bears and people, the intersection of smart bears and humans is a lot larger than one might think.',
    'Software developers are in a constant struggle to race the universe in developing better, more foolproof software.',
    "Life is pretty easy. It's the people that make it hard.",
    "The problem with some people is not that they don't have a good heart, but that it's beating in THEIR chest.",
    'Nobody is getting out alive. You might as well do it anyway. Worst case scenario, you get a good story out of it!'
]

const getRandomQuote = (): string => {
    return quotes[Math.floor(Math.random() * (quotes.length - 1))]
}

export const useRandomQuote = (quoteChangeInterval?: number): [string, Dispatch<SetStateAction<string>>] => {
    quoteChangeInterval ??= frontendConfig.quoteUpdateInterval

    const [quote, setQuote] = useState('')

    useEffect(() => {
        const interval = window.setInterval(() => {
            setQuote(getRandomQuote())
        }, quoteChangeInterval)

        const randomQuote = getRandomQuote()

        setQuote(randomQuote)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return [quote, setQuote]
}
