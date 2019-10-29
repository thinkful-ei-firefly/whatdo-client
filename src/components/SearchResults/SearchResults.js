import React from 'react'
import EventItem from '../EventItem/EventItem'
import SearchContext from '../../contexts/SearchContext'
import PageBar from '../../components/PageBar/PageBar'
import './SearchResults.css'

export default class SearchResults extends React.Component {

  static contextType = SearchContext

  render () {

    const events = this.context.events;

    if (events.length > 0) {
      const eventList = events.map(event => 
        <li key={event.id}>
          <EventItem 
            key={event.id}
            fetch_id={event.id}
            id={event.id}
            name={event.name}
            url={event.url}
            description={event.description || 'Visit the site for more information!'}
            venue={event.venue}
            address={event.address}
            city_name={event.city_name}
            region_name={event.region_name}
            start_time={event.start_time}
            stop_time={event.stop_time || event.start_time}
            image={event.image}
            saveEvent={this.context.saveEvent}
          />
        </li>
      )

      return (
        <div className="SearchResults">
        <h2>Search results for (options) within (x) miles of (location)</h2>
          <ul>
            {eventList}
          </ul>
          <PageBar />
        </div>
      )
    }
    else {
      return (
        <div className="SearchResults">
          <h2 >Sorry, we couldn't find any events near {this.context.zipCode}</h2>          
        </div>
      )
    }
    
  }
}