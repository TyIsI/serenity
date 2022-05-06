import React, { FC } from 'react'

import { Modal, Button } from 'react-bootstrap'

import { WeatherConsentModalProps } from './WeatherConsentModal.types'

import styles from './WeatherConsentModal.module.css'

const WeatherConsentModal: FC<WeatherConsentModalProps> = ({ consentHandler, showConsentModal, showConsentModalHandler }) => {
  showConsentModal = showConsentModal ?? false

  return (
    <div className={styles.WeatherConsentModal}>
      <Modal show={showConsentModal} onHide={() => showConsentModalHandler(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Location Consent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Serenity needs your location to provide you with weather updates. To avoid tracking your specific location, Serenity strips the accuracy from your actual location to a maximum of 3 decimal places. Serenity also proxies the requests through the server to avoid IP address leakage to the weather information provider.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn-sm" onClick={() => showConsentModalHandler(false)}>
            Close
          </Button>
          <Button variant="primary" className="btn-sm" onClick={() => consentHandler(true)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default WeatherConsentModal
