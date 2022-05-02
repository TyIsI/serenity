export interface WeatherObject { weather: { location: { name: '' }, current: { temp_c: 0, condition: { text: '', icon: '' } } } }
export interface WeatherProps { }
export interface WeatherState {
  loading: boolean;
  weather: WeatherObject;
}
