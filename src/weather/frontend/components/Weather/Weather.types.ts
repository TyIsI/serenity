import { MeasurementsModes } from 'src/types/units'
import { ConsentTypes } from 'src/types/consent'
import { WeatherObject } from 'src/types/weather'

export interface WeatherProps { }
export interface WeatherState {
  loading: boolean;
  weather: WeatherObject;
  measurementsMode: MeasurementsModes;
  dualMode: boolean;
  locationConsent: ConsentTypes;
  showConsentModal: boolean;
}
