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
    const dailyWeather = this.context.weather.filter(snapshot => {
      const dateTime = new Date(snapshot.dt);
      return (
        dateTime.toLocaleDateString() === this.context.date.toLocaleDateString()
      );
    });

    if (dailyWeather.length > 0) {
      const weatherSnapshots = dailyWeather.map(snapshot => (
        <WeatherIcon key={snapshot.date_time} {...snapshot} />
      ));
      return (
        <div className="weatherbar">
          <h2 className="weatherbar-header">
            Upcoming weather near {this.context.zipCode} on{' '}
            {this.context.date.toLocaleDateString()}
          </h2>
          {weatherSnapshots}
        </div>
      );
    } else {
      return (
        <div className="weatherbar">
          <h2>No Weather data available for {this.context.date}</h2>
        </div>
      );
    }
  }
}
