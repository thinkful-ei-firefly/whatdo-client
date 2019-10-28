import React from 'react'
import './EventItem.css'

export default function EventItem (props) {

  const { name, url, description, venue, address, start_time } = props

  // const newEvent = { name, url, description, venue, address, start_time }

  // let imgsrc='https://www.nationalpetregister.org/assets/img/no-photo.jpg'

  // if (image && image.medium && image.medium.url) {
  //   imgsrc=image.medium.url
  // }

  let eventTime = new Date(start_time)
  eventTime = eventTime.toLocaleTimeString()

  return (
    <div className='EventItem__Container'>
    <div  className='EventItem'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      
      <div className='EventItems'>
      
      <h3 className='EventItem__header'>{name}</h3>
      {/* <p>
        <img src={imgsrc} alt="thumbnail"/>
      </p> */}
      <h4 className='EventItem__time'>{venue}, {eventTime}</h4>
      <h5 className='EventItem__address'>{address}</h5>      
      <div className='EventItem__description'>
      <p >{description}</p>
      </div>
      
      <div className='EventItem__learnMore' ><a  href={url}>Learn More</a></div>
      
      <br></br>
      <div className='EventItem__favorite'>

      <button className='button'  onClick={() => props.saveEvent(props)} ></button>

        
      </div>

      </div>

    </div>
    </div>
    
  )
}
//<button onClick={() => props.saveEvent(props)}><i className="fa fa-heart" aria-hidden="true"></i></button>


//      <button className='EventItem__button' onClick={() => props.saveEvent(props)}>Add to favorite<i className="fa fa-heart" aria-hidden="true"></i></button>
