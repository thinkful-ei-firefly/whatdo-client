import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchResults from '../../components/SearchResults/SearchResults'
import WeatherBar from '../../components/WeatherBar/WeatherBar'
import './EventsPage.css'
import SearchContext from '../../contexts/SearchContext'
import Loading from '../../components/Loading/Loading'

export default class EventsPage extends React.Component {
  static contextType = SearchContext

  loadingComplete() {
    return (
      <>
        <WeatherBar />
        <SearchResults />
      </>
    )
  }

  render() {
    return (
      <div className="EventsPage">
         <SearchBar />
         <Loading />
        {this.context.loading ? <Loading /> : this.loadingComplete()}
      </div>
    )
  }
}
