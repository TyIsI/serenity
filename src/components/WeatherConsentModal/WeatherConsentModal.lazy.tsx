import React, { lazy, Suspense } from 'react';

const LazyWeatherConsentModal = lazy(() => import('./WeatherConsentModal'));

const WeatherConsentModal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWeatherConsentModal {...props} />
  </Suspense>
);

export default WeatherConsentModal;
