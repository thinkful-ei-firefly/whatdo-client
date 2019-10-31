import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import SearchContext from '../../contexts/SearchContext';
import './WeatherBar.css';

export default class WeatherBar extends React.Component {
  static contextType = SearchContext;

  dateToStringFormat(date) {
    return date.toISOString().slice(0, 10);
  }

  render() {
    const { zipCode, date } = this.context.searchedTerms;

    const dailyWeather = this.context.weather.filter(snapshot => {
      const dateTime = new Date(snapshot.dt);
      const searchDate = new Date(`${this.context.date}T12:00:00`);
      return (
        dateTime.toLocaleDateString() === searchDate.toLocaleDateString() &&
        dateTime.getHours() <= 23 &&
        dateTime.getHours() >= 8
      );
    });

    console.log(dailyWeather);

    if (dailyWeather.length > 0) {
      const weatherSnapshots = dailyWeather.map(snapshot => (
        <WeatherIcon key={snapshot.date_time} {...snapshot} />
      ));
      return (
        <div className="weatherbar" id="scroll-target">
          <h2 className="weatherbar-header">
            Upcoming weather near {zipCode} on {date}
          </h2>
          {weatherSnapshots}
        </div>
      );
    } else {
      return (
        <div className="weatherbar" id="scroll-target">
          <h2>No Weather data available for {date}</h2>
        </div>
      );
    }
  }
}
