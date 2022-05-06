import React from 'react';
import ReactDOM from 'react-dom';
import WeatherConsentModal from './WeatherConsentModal';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherConsentModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});