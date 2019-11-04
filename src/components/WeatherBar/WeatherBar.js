import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import SearchContext from '../../contexts/SearchContext';
import './WeatherBar.css';

export default class WeatherBar extends React.Component {
  static contextType = SearchContext;

  render() {
    const { zipCode } = this.context.searchedTerms;

    const dailyWeather = this.context.weather.filter(snapshot => {
      //filter weather data to only display data from the given day during local times 8am-11pm
      const dateTime = new Date(snapshot.dt);
      const searchDate = new Date(`${this.context.searchedTerms.date}T12:00:00`);
      return (
        dateTime.toLocaleDateString() === searchDate.toLocaleDateString() &&
        dateTime.getHours() <= 23 &&
        dateTime.getHours() >= 8
      );
    });

    if (dailyWeather.length > 0) {
      const weatherSnapshots = dailyWeather.map(snapshot => (
        <WeatherIcon key={snapshot.date_time} {...snapshot} />
      ));
      return (
        <div className="weatherbar" id="scroll-target">
          <h2 className="weatherbar-header">
            Upcoming weather near {zipCode} on {this.context.searchedTerms.date}
          </h2>
          {weatherSnapshots}
        </div>
      );
    } else {
      return (
        <div className="weatherbar" id="scroll-target">
          <h2>No Weather data available for {this.context.searchedTerms.date}</h2>
        </div>
      );
    }
  }
}
