import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import WeatherBar from '../../components/WeatherBar/WeatherBar';
import './EventsPage.css';

export default class EventsPage extends React.Component {
  render() {
    return (
      <div className="EventsPage">
        <SearchBar />
        <WeatherBar />
        <SearchResults />
      </div>
    );
  }
}
