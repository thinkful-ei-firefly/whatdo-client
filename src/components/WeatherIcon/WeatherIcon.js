import React from 'react'

export default function WeatherIcon (props) {
  function timestamp() {
    //returns a single-digit hour timestamp on a 12-hour clock (ie "4 PM")
    const date = new Date(props.dt)
    const [time, period] = date.toLocaleTimeString().split(' ')
    return `${time.split(':')[0]} ${period}`
  }

  return (
    <div className="weathericon">
      <h3 className="weathericon-time">{timestamp()}</h3>
      <img
        className="weathericon-icon"
        src={props.iconUrl}
        alt={props.description}
      />
      <p className="weathericon-temperature high">
        High:{props.temp_hi}
      </p>
      <p className="weathericon-temperature low">Low:{props.temp_low}</p>
    </div>
  )
}
