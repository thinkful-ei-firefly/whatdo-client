import React from 'react'
import { Switch, Route } from 'react-router-dom'

import eventDataHelpers from '../../helpers/event-data-helpers'
import EventApiService from '../../services/event-api-service'
import weatherDataHelpers from '../../helpers/weather-data-helpers'
import WeatherApiService from '../../services/weather-api-service'

import PublicOnlyRoute from '../../components/utils/PublicRoute'
import PrivateOnlyRoute from '../../components/utils/PrivateRoute'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import SearchContext from '../../contexts/SearchContext'

import './App.css'

import LandingPage from '../../routes/LandingPage/LandingPage'
import EventPage from '../../routes/EventPage/EventPage'
import EventsPage from '../../routes/EventsPage/EventsPage'
import SignInPage from '../../routes/SignInPage/SignInPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

class App extends React.Component {

  state = {
    city: 'Tucker',
    zipCode: '30084',
    weather: [],
    date: new Date(Date.now()),
    events: []
  }

  apiSearch = async (
    zipCode, 
    distance=10, 
    date, 
    categories=eventDataHelpers.allCatStr(), 
    pageNum=1, 
    pageSize=10) => {
      //send api request to get weather
      //send api request to get events
      //update state
      try {
        const eventJsonData = await EventApiService.eventSearch(zipCode, distance, eventDataHelpers.searchDateStr(date), categories, pageNum, pageSize)
        const eventList = eventDataHelpers.parseEventList(eventJsonData)

        const weatherJsonData = await WeatherApiService.weatherReport(zipCode)
        const weatherReport = weatherDataHelpers.parseWeatherReport(weatherJsonData)

        const newState = {
          city: weatherJsonData.city.name,
          zipCode,
          weather: weatherReport,
          date: date,
          events: eventList
        }

        this.setState(newState)
  
      } catch(err) {
        console.log(err)
      }
    }

  render () {
    const searchContextValue = {
      city: this.state.city,
      zipCode: this.state.zipCode,
      weather: this.state.weather,
      date: this.state.date,
      events: this.state.events,
      apiSearch: this.apiSearch
    }
    
    return (
      <div className="App">
        <SearchContext.Provider value={searchContextValue}>
          <Header />
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/signUp'} component={SignUpPage} />
            <PublicOnlyRoute path={'/signIn'} component={SignInPage} />
            <Route path={'/eventsPage'} component={EventsPage} />
            <PrivateOnlyRoute path={'/eventPage'} component={EventPage} />
            {/* <Route path={'/signUp'} component={SignUpPage} /> */}
            {/* <Route path={'/signIn'} component={SignInPage} /> */}
            {/* <Route path={'/eventsPage'} component={EventsPage} /> */}
            {/* <Route path={'/eventPage'} component={EventPage} /> */}
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </SearchContext.Provider>
      </div>
    )
  }  
}

export default App
