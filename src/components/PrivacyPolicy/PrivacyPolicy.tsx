import stateMachine from 'pretty-state-machine'
import React, { FC, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import { PrivacyPolicyProps } from './PrivacyPolicy.types'

import styles from './PrivacyPolicy.module.css'

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
  const [showPrivacyPolicy, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    handleShow()

    stateMachine.sub('showPrivacyPolicy', ({ showPrivacyPolicy }:{showPrivacyPolicy: boolean}) => { setShow(showPrivacyPolicy) })

    return () => {
      stateMachine.unsub('showPrivacyPolicy', ({ showPrivacyPolicy }:{showPrivacyPolicy: boolean}) => { setShow(showPrivacyPolicy) })
    }
  }, [])

  useEffect(() => {
    stateMachine.pub('showPrivacyPolicy', { showPrivacyPolicy: showPrivacyPolicy })
  }, [showPrivacyPolicy])

  return (
    <div className={styles.PrivacyPolicy}>
      <Modal show={showPrivacyPolicy} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Serendipity Dashboard is a web application that is not intended to collect any personal information.</p>
          <p>Please see <a href="https://unsplash.com/privacy">Unsplash&apos;s privacy policy about what they do when you download the images from them.</a></p>
          <p>The Serenity Dashboard software caches and proxies the requests for image selection that go to Unsplash.</p>
          <p>Location information gets proxied through the Serenity Dashboard service and is anonymously submitted to <a href="https://weatherapi.com/">weatherapi.com</a> to get your current weather.</p>
          <p>Outside of that, the only information that is collected within this app is the URL of the page you are on. And that does not get used for anything.</p>
          <p>This application is hosted on Vercel. So they might see what requests coming in.</p>
          <p>All other information (todos, bookmarks, etc) are stored locally, and only locally, in your browser.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PrivacyPolicy
