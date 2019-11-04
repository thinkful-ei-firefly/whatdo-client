import React from 'react'
import '../EventItem/EventItem.css'

export default function SavedEvent (props) {

  const { name, url, description, venue, address, start_time } = props

  let eventTime = new Date(start_time)
  eventTime = eventTime.toLocaleString()

  return (
    <div className='EventItem__Container'>
      <div className='EventItem'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className='EventItems'>
        
          <h3 className='EventItem__header' >{name}</h3>
          <h4 className='EventItem__time' >{venue}, {eventTime}</h4>
          <h5 className='EventItem__address' >{address}</h5>

          <div>
            <p>{description}</p>
          </div>
          
          <div className='EventItem__learnMore'>
            <a href={url} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          
          <br/>

          <div className='EventItem__remove'>
            <button className='EventItem__removebtn' onClick={() => props.removeEvent(props.id)}></button>
          </div>

        </div>
      </div>
    </div>    
  )
}


//      
