import React from 'react'

export default function EventItem (props) {

  const { name, url, description, venue, address, start, stop, image } = props

  // let imgsrc='https://www.nationalpetregister.org/assets/img/no-photo.jpg'

  // if (image && image.medium && image.medium.url) {
  //   imgsrc=image.medium.url
  // }

  let eventTime = new Date(start)
  eventTime = eventTime.toLocaleTimeString()

  return (
    <div>
      <h3>{name}</h3>
      {/* <p>
        <img src={imgsrc} alt="thumbnail"/>
      </p> */}
      <h4>{venue}, {eventTime}</h4>
      <h5>{address}</h5>      

      {description}

      <a href={url}>Learn More</a>
      <button>Add to favorites</button>
    </div>
  )
}
