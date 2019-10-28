import React from 'react'

export default class WeatherIcon extends React.Component {

  timestamp () {
    const date = new Date(this.props.dt)
    const [time, period] = date.toLocaleTimeString().split(' ')
    return `${time.split(':')[0]} ${period}`
  }

  render () {

    return (
      <div className="weathericon">
        <h3 className="weathericon-time">{this.timestamp()}</h3>
        <img className="weathericon-icon" src={this.props.iconUrl} alt={this.props.description}/>
        <p className="weathericon-temperature high">High:{this.props.temp_hi}</p>
        <p className="weathericon-temperature low">Low:{this.props.temp_low}</p>
      </div>
    );
  }
}