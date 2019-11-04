import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchResults from '../../components/SearchResults/SearchResults'
import WeatherBar from '../../components/WeatherBar/WeatherBar'
import './EventsPage.css'
import SearchContext from '../../contexts/SearchContext'
import ErrorBar from '../../components/ErrorBar/ErrorBar'
import Loading from '../../components/Loading/Loading'

export default class EventsPage extends React.Component {
  static contextType = SearchContext

  loadingComplete() {
    return (
      <>
        {this.context.fetchError && <ErrorBar />}
        <WeatherBar />
        <SearchResults />
      </>
    )
  }

  render() {
    return (
      <div className="EventsPage">
        <SearchBar />
        {this.context.loading ? <Loading /> : this.loadingComplete()}
      </div>
    )
  }
}
