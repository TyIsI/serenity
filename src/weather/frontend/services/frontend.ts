import stateMachine from 'pretty-state-machine'
import { Weather } from '../../types/weather'

class FrontendService {
  enabled: boolean = false
  intervalId: any = 0
  weather: Weather | undefined | unknown

  async updateWeather () {
    if (!global.window) return

    if (this.enabled === false) return

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const params = {
          coords: {
            latitude: parseFloat(parseFloat('' + position.coords.latitude).toFixed(3)),
            longitude: parseFloat(parseFloat('' + position.coords.longitude).toFixed(3))
          }
        }

        const result = await fetch('/api/weather', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        })

        const weather: Weather | undefined | unknown = await result.json()

        stateMachine.pub({ weather })
      })
    } else {
      console.error('Location Not Available')
    }
  }

  start () {
    if (typeof window.navigator !== 'undefined' && window.navigator.geolocation !== undefined) {
      this.enabled = true
    }

    if (!this.enabled) return

    if (this.intervalId !== 0) return

    this.updateWeather()
    this.intervalId = setInterval(this.updateWeather.bind(this), 300000)
  }

  stop () {
    clearInterval(this.intervalId)
  }
}

const instance = new FrontendService()

export default instance
export { FrontendService as WeatherService }
