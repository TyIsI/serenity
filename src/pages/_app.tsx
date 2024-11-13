'use client'

import type { FC } from 'react'

import type { AppProps } from 'next/app'

import dynamic from 'next/dynamic'

import '@/styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default dynamic(async () => await Promise.resolve(App), {
    ssr: false
})
