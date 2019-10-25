import React from 'react'
import '../EventItem/EventItem.css'

export default function SavedEvent (props) {

  const { name, url, description, venue, address, start_time } = props

  // let imgsrc='https://www.nationalpetregister.org/assets/img/no-photo.jpg'

  // if (image && image.medium && image.medium.url) {
  //   imgsrc=image.medium.url
  // }

  let eventTime = new Date(start_time)
  eventTime = eventTime.toLocaleString()

  return (
    <div className='.EventItem__Container'>
    <div  className='EventItem'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      <h3>{name}</h3>
      {/* <p>
        <img src={imgsrc} alt="thumbnail"/>
      </p> */}
      <h4>{venue}, {eventTime}</h4>
      <h5>{address}</h5>      
      {description}{" "}
      <a href={url}>Learn More</a>
      <br></br>
      <button onClick={() => props.removeEvent(props.id)}>Remove</button>
    </div>
    </div>
    
  )
}
