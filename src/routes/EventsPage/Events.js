import React from 'react'
import Search from '../../components/Search/Search'
import SearchResults from '../../components/SearchResults/SearchResults'
import WeatherBar from '../../components/WeatherBar/WeatherBar'

export default class EventsPage extends React.Component {
  render() {
    return (
      <div className="EventsPage">
        <Search />
        <WeatherBar />
        <SearchResults />
      </div>
    )
  }
}
