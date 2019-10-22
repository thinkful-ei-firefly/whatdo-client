const weatherDataHelpers = {

  //convert temperatures in K to F
  tempKtoF (tempK) {
    return Math.round((tempK - 273.15) * 9 / 5 + 32)
  },

  getIconUrl (iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  },

  //takes a JSON server response and returns only the data we need
  //as an array of objects, each representing a 3-hr period of the forecast
  //for the 5 days following the time of the API call
  parseWeatherReport (json) {
    const weatherData = json.list.map(hourForecast => {
      let weatherSnapshot = {
        date_time: hourForecast.dt_txt,
        temp_low: this.tempKtoF(hourForecast.main.temp_min),
        temp_hi: this.tempKtoF(hourForecast.main.temp_max),
        description: hourForecast.weather[0].description,
        iconUrl: this.getIconUrl(hourForecast.weather[0].icon)
      }
      return weatherSnapshot
    })
    return weatherData
  }

}

export default weatherDataHelpers