import React from 'react'

export default class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <form class="search-form">
          <div>
            <input
              placeholder="zipcode"
              type="text"
              name="search"
              id="search"
            />
            <input
              placeholder="within X mile"
              type="text"
              name="search"
              id="search"
            />
          </div>

          <input
            type="date"
            id="date"
            name="date"
            value="2019-10-21"
            min="2019-01-01"
            max="2019-12-31"
          />

          <p>Select event type</p>

          <input
            type="radio"
            name="event-type"
            value="1"
            class="event-type-radio"
          />
          <label htmlFor="event-type">
            <span>Concert</span>
          </label>

          <input
            type="radio"
            name="event-type"
            value="2"
            class="event-type-radio"
          />
          <label htmlFor="event-type" />
          <span>Outdoor Activities</span>

          <input
            type="radio"
            name="event-type"
            value="1"
            class="event-type-radio"
          />
          <label htmlFor="event-type">
            <span>Museums</span>
          </label>

          <input
            type="radio"
            name="event-type"
            value="2"
            class="event-type-radio"
          />
          <label htmlFor="event-type">
            <span>Festivals</span>
          </label>

          <input
            type="radio"
            name="event-type"
            value="2"
            class="event-type-radio"
          />
          <label htmlFor="event-type">
            <span>Bars</span>
          </label>

          <input
            type="radio"
            name="event-type"
            value="2"
            class="event-type-radio"
          />
          <label htmlFor="event-type">
            <span>Movies</span>
          </label>

          <input
            type="radio"
            name="event-type"
            value="2"
            class="event-type-radio"
          />
          <label htmlFor="event-type">
            <span>Others</span>
          </label>

          <input type="submit" value='Search'/>
        </form>
      </div>
    )
  }
}
