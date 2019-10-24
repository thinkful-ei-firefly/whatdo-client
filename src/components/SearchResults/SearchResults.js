import React from 'react'
import EventItem from '../EventItem/EventItem'
import SearchContext from '../../contexts/SearchContext'

export default class SearchResults extends React.Component {

  static contextType = SearchContext

  render () {

    const events = this.context.events;

    if (events.length > 0) {
      const eventList = events.map(event => 
        <li>
          <EventItem 
            key={event.id}
            name={event.name}
            url={event.url}
            description={event.description}
            venue={event.venue}
            address={event.address}
            start={event.start_time}
            stop={event.stop_time}
            image={event.image}
          />
        </li>
      )

      return (
        <div className="SearchResults">
          <ul>
            {eventList}
          </ul>          
        </div>
      )
    }
    else {
      return (
        <div className="SearchResults">
          <h2>Sorry, we couldn't find any events near {this.context.zipCode}</h2>          
        </div>
      )
    }
    
  }
}