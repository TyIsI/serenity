'use client'

import type { FC, ReactNode } from 'react'

import '@/styles/globals.css'

interface RootLayoutProps {
    readonly children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='en' className='bg-gray-200 bg-cover bg-fixed text-white'>
            <head>
                <title>Serenity Dashboard</title>
                <meta name='description' content='Welcome to the Serenity Dashboard' />
            </head>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
