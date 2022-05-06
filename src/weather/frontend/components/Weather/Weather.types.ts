import { MeasurementsModes } from 'types/units'
import { ConsentTypes } from 'types/consent'
import { WeatherObject } from 'types/weather'

export interface WeatherProps { }
export interface WeatherState {
  loading: boolean;
  weather: WeatherObject;
  measurementsMode: MeasurementsModes;
  locationConsent: ConsentTypes;
  showConsentModal: boolean;
}
