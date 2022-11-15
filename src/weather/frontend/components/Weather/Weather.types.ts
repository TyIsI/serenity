import { ConsentTypes } from 'types/consent'
import { MeasurementsModes } from 'types/units'
import { WeatherObject } from 'types/weather'

export interface WeatherProps { }
export interface WeatherState {
  loading: boolean;
  weather: WeatherObject;
  measurementsMode: MeasurementsModes;
  dualMode: boolean;
  locationConsent: ConsentTypes;
  showConsentModal: boolean;
}
