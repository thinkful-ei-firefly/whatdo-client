import React from 'react'
import './EventItem.css'

export default function EventItem (props) {

  const { name, url, description, venue, address, start_time } = props

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
      <h3 className='EventItem__header'>{name}</h3>
      {/* <p>
        <img src={imgsrc} alt="thumbnail"/>
      </p> */}
      <h4 className='EventItem__time'>{venue}, {eventTime}</h4>
      <h5 className='EventItem__address'>{address}</h5>      
      <p className='EventItem__description'>{description}</p>
      {" "}
      <div className='EventItem__learnMore' ><a  href={url}>Learn More</a></div>
      
      <br></br>
      <div className='EventItem__favorite'>

        <input className='EventItem__favorite__input'  onClick={() => props.saveEvent(props)} type="checkbox" id='sub'></input>
        <label htmlFor='sub' >
          <heart><i className="fas fa-heart"></i></heart>
          <sync><i className="fas fa-sync-alt fa-spin"></i></sync>
          <check><i className="fas fa-check-circle"></i></check>
        </label>
      </div>
      

    </div>
    </div>
    
  )
}
//<button onClick={() => props.saveEvent(props)}><i className="fa fa-heart" aria-hidden="true"></i></button>


//      <button className='EventItem__button' onClick={() => props.saveEvent(props)}>Add to favorite<i className="fa fa-heart" aria-hidden="true"></i></button>
