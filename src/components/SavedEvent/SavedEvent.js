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
    <div className='EventItem__Container'>
    <div  className='EventItem'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      <h3 className='EventItem__header' >{name}</h3>
      {/* <p>
        <img src={imgsrc} alt="thumbnail"/>
      </p> */}
      <h4 className='EventItem__time' >{venue}, {eventTime}</h4>
      <h5 className='EventItem__address' >{address}</h5>      
      <p className='EventItem__description' >{description}</p>
      <div className='EventItem__learnMore' ><a href={url}>Learn More</a></div>
      
      <br></br>
      <button className='EventItem__removebtn' onClick={() => props.removeEvent(props.id)}>Remove</button>
    </div>
    </div>
    
  )
}
