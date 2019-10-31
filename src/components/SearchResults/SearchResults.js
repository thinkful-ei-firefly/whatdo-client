import React from 'react';
import EventItem from '../EventItem/EventItem';
import SearchContext from '../../contexts/SearchContext';
import PageBar from '../../components/PageBar/PageBar';
import './SearchResults.css';

export default class SearchResults extends React.Component {
  static contextType = SearchContext;

  render() {
    const events = this.context.events;

    const {
      zipCode,
      distance,
      music,
      sports,
      attractions,
      performingArts,
      bars,
      festivals
    } = this.context.searchedTerms;

    const checkboxes = {
      music,
      sports,
      attractions,
      performingArts,
      bars,
      festivals
    };

    let categories = '';
    for (const [key, value] of Object.entries(checkboxes)) {
      if (value === true) {
        let tag = '';

        if (key === 'performingArts') {
          tag = 'performing arts';
        } else {
          tag = key;
        }
        if (categories === '') {
          categories += tag;
        } else {
          categories += `, ${tag}`;
        }
      }
    }

    if (categories === '') {
      categories = 'all types';
    }

    if (events.length > 0) {
      const eventList = events.map(event => (
        <li key={event.id}>
          <EventItem
            key={event.id}
            fetch_id={event.id}
            id={event.id}
            name={event.name}
            url={event.url}
            description={
              event.description || 'Visit the site for more information!'
            }
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
      ));

      return (
        <div className="SearchResults">
          <h2>
            Search results for events matching {categories} within {distance}{' '}
            miles of {this.context.city}
          </h2>
          <ul>{eventList}</ul>
          <PageBar />
        </div>
      );
    } else {
      return (
        <div className="SearchResults">
          <h2>Sorry, we couldn't find any events near {zipCode}</h2>
        </div>
      );
    }
  }
}
