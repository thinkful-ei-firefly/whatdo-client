import React from 'react'
import WeatherApiService from '../../services/weather-api-service'
import weatherDataHelper from '../../helpers/weather-data-helpers'
import EventApiService from '../../services/event-api-service'
import eventDataHelpers from '../../helpers/event-data-helpers'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import './WeatherBar.css'

export default class WeatherBar extends React.Component {

  state = {
    city: 'Tucker',
    zipCode: '30084',
    weather: [],
    date: new Date(Date.now())
  }

  dateToStringFormat (date) {
    return date.toISOString().slice(0, 10)
  }

  getWeatherData = async (zipCode) => {
    try {
      const jsonData = await WeatherApiService.weatherReport(zipCode)
      const weatherReport = weatherDataHelper.parseWeatherReport(jsonData)
      const weatherState = {
        city: jsonData.city.name,
        zipCode,
        weather: weatherReport
      }
      this.setState(weatherState)

    } catch(err) {
      console.log(err)
    }
    
  }

  handleButtonClickEvents = async (ev) => {
    ev.preventDefault()
    try {
      const jsonData = await EventApiService.eventSearch('30084')
      const eventList = eventDataHelpers.parseEventList(jsonData)
      console.log(eventList)

    } catch(err) {
      console.log(err)
    }
    
  }

  componentDidMount () {
    this.getWeatherData(this.state.zipCode)
  }

  render () {
    const dailyWeather = this.state.weather.filter(snapshot => {
      const dateTime = new Date(snapshot.dt)
      return dateTime.toLocaleDateString() === this.state.date.toLocaleDateString()
    })

    if (dailyWeather.length > 0) {
      const weatherSnapshots = dailyWeather.map(snapshot => <WeatherIcon key={snapshot.date_time} {...snapshot}/>)
      return (
        <div className="weatherbar">
          <h2 className="weatherbar-header">Upcoming weather near {this.state.zipCode} on {this.state.date.toLocaleDateString()}</h2>
          {weatherSnapshots}
          {/* <h2>Tonight</h2>
          <img src={tonight.iconUrl} alt={tonight.description}/>
          <p>Hi: {tonight.temp_hi} || Lo: {tonight.temp_low}</p> */}
        </div>
      )
    }
    else {
      return (
        <h2>No Weather data available for {this.state.date.toLocaleDateString()}</h2>
      )
    }
    
  }
}