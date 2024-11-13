'use client'

import type { FC } from 'react'

import type { PrivacyPolicyProps } from './PrivacyPolicy.types'

import { Modal } from '@/components/Modal/Modal'

import { useStateMachine } from '@/hooks/useStateMachine'

export const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useStateMachine('showPrivacyPolicy', false)

    const handleClose = (): void => {
        setShowPrivacyPolicy(false)
    }

    return (
        <Modal title={'Privacy Policy'} show={showPrivacyPolicy} onHide={handleClose} closeButton={true}>
            <div>
                <p>Serenity Dashboard was written with privacy in mind and intends to collect or use as little any personal information as possible.</p>
                <p>The images in Serenity Dashboard are sourced from Unsplash.</p>
                <p>
                    Please see <a href='https://unsplash.com/privacy'>Unsplash&apos;s privacy policy</a> about what they do when you download the images from
                    them.
                </p>
                <p>On the server side, the Serenity Dashboard software caches and proxies the requests for image selection that go to Unsplash.</p>
                <p>
                    Weather information is supplied through <a href='https://weatherapi.com/'>weatherapi.com</a>, but location information is proxied through
                    the Serenity Dashboard service and is anonymously submitted to to get your current weather based on your GPS location rounded to the nearest
                    2 decimal positions.
                    <br />
                    E.g. 46.5691099,-81.1909967 is converted to 46.57,-81.19
                </p>
                <p>
                    Beyond that, the only information that is collected within this app is the URL of the page you are on. And that does not get used for
                    anything.
                </p>
                <p>This application is hosted on Vercel. So they might see what requests coming in.</p>
                <p>All other information (tasks, bookmarks, etc) are stored locally, and only locally, in your browser.</p>
            </div>
        </Modal>
    )
}

export default PrivacyPolicy
