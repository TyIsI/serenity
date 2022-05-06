import React from 'react'
import ReactDOM from 'react-dom'
import WeatherConsentModal from './WeatherConsentModal'

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WeatherConsentModal showConsentModal={false} showConsentModalHandler={(show: boolean) => console.log('showConsentModalHandler', show)} consentHandler={(consent: boolean) => console.log('consentHandler', consent)} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
