import config from '../config'

const WeatherApiService = {

  async weatherReport (zipCode) {
    const res = await fetch (`${config.OPEN_WEATHER_FORECAST_ENDPOINT}&zip=${zipCode}`)
    if (!res.ok){
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  }

}

export default WeatherApiService