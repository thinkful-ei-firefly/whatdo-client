import React from 'react'
import WeatherApiService from '../../services/weather-api-service'
import weatherDataHelper from '../../helpers/weather-data-helpers'
import EventApiService from '../../services/event-api-service'
import eventDataHelpers from '../../helpers/event-data-helpers'

export default class WeatherBar extends React.Component{
  handleButtonClickWeather = async (ev) => {
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

  handleButtonClickEvents = async (ev) => {
    ev.preventDefault()
    try {
      const jsonData = await EventApiService.eventSearch('30084')
      console.log(jsonData)
      const eventList = eventDataHelpers.parseEventList(jsonData)
      console.log(eventList)

    } catch(err) {
      console.log(err)
    }
    
  }

  render(){
    return(
      <div>
        <button type="button" onClick={ev => this.handleButtonClickEvents(ev)}>Click me!</button>
        <button type="button" onClick={() => console.log(eventDataHelpers.todayStr())}>DateString</button>
      </div>
    )
  }
}