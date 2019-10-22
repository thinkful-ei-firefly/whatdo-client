import React from 'react'
import WeatherApiService from '../../services/weather-api-service'
import weatherDataHelper from '../../helpers/weather-data-helpers'

export default class WeatherBar extends React.Component{
  handleButtonClick = async (ev) => {
    ev.preventDefault()
    try {
      const jsonData = await WeatherApiService.weatherReport('30084')
      console.log(jsonData)
      const weatherReport = weatherDataHelper.parseWeatherReport(jsonData)
      console.log(weatherReport)

    } catch(err) {
      console.log(err)
    }
    
  }

  render(){
    return(
      <div>
        <button type="button" onClick={ev => this.handleButtonClick(ev)}>Click me!</button>
      </div>
    )
  }
}