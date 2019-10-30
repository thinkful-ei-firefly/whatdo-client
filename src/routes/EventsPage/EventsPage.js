import React from 'react';
import SearchContext from '../../contexts/SearchContext';

import SearchResults from '../../components/SearchResults/SearchResults';
import WeatherBar from '../../components/WeatherBar/WeatherBar';
import './EventsPage.css';
import CurrLocBtn from '../../components/CurrLocBtn/CurrLocBtn';

export default class EventsPage extends React.Component {
  static contextType = SearchContext;

  handleSubmit(ev) {
    ev.preventDefault();
    const zipCode = this.context.zipCode;
    const distance = this.context.distance;
    const date = new Date(this.context.date);

    let categories = [];

    // for (let i = 1; i <= 6; i++) {
    //   if (this.context.[`box${i}`].checked)
    //     categories.push(`${ev.target[`box${i}`]}`);
    // }

    categories = categories.join();

    if (!categories)
      categories =
        'music,sports,outdoors_recreation,attractions,performing_arts,comedy,food,singles_social,festivals_parades,holiday';

    this.context.apiSearch(zipCode, distance, date, categories);
    //once SearchResults page is hooked up to context, modify apiSearch to return a promise
    //then add a .then chain to history.push the user to the results page
  }

  render() {
    return (
      <div className="EventsPage">
        <div className="EventsPage__Search">
          <form
            className="EventsPage__form "
            onSubmit={ev => this.handleSubmit(ev)}
          >
            {/*
      <div role='alert' className='alert' >
          {error && <p>{error}</p>}
        </div>
      */}

            <div className="EventsPage__form-section">
              <input
                type="text"
                className="input"
                id="zipCode"
                name="zipCode"
                autoComplete="off"
                value={this.context.zipCode}
                onChange={this.context.setSearchTerm}
                required
              />
              <label className="label-name" htmlFor="zipCode">
                <span className="content-name">Enter your zipcode</span>
              </label>
              <CurrLocBtn />
            </div>

            <div className="EventsPage__form-section">
              <input
                type="text"
                className="input"
                id="distance"
                name="distance"
                autoComplete="off"
                value={this.context.distance}
                onChange={this.context.setSearchTerm}
                required
              />
              <label className="label-name" htmlFor="distance">
                <span className="content-name">Miles around you</span>
              </label>
            </div>

            <div className="EventsPage__form-section date">
              <input
                className="input"
                type="date"
                id="date"
                name="date"
                value={this.context.date}
                onChange={this.context.setSearchTerm}
              />
            </div>

            <div className="EventsPage__checkbox__section">
              <input
                type="checkbox"
                id="box1"
                name="music"
                value="music"
                checked={this.context.music}
                onChange={this.context.setChecked}
              ></input>
              <label htmlFor="box1">Music</label>
              <input
                type="checkbox"
                id="box2"
                name="sports"
                value="sports,outdoors_recreation"
                checked={this.context.sports}
                onChange={this.context.setChecked}
              ></input>
              <label htmlFor="box2">Sports</label>
              <input
                type="checkbox"
                id="box3"
                name="attractions"
                value="attractions"
                checked={this.context.attractions}
                onChange={this.context.setChecked}
              ></input>
              <label htmlFor="box3">Attractions</label>
              <input
                type="checkbox"
                id="box4"
                name="performingArts"
                value="performing_arts,comedy"
                checked={this.context.performingArts}
                onChange={this.context.setChecked}
              ></input>
              <label htmlFor="box4">Performing Arts</label>
              <input
                type="checkbox"
                id="box5"
                name="bars"
                value="food,singles_social"
                checked={this.context.bars}
                onChange={this.context.setChecked}
              ></input>
              <label htmlFor="box5">Bars</label>
              <input
                type="checkbox"
                id="box6"
                name="festivals"
                value="festivals_parades,holiday"
                checked={this.context.festivals}
                onChange={this.context.setChecked}
              ></input>
              <label htmlFor="box6">Festivals</label>
            </div>

            <div className="form-btn">
              <button className="EventsPage__searchForm__btn" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

        <WeatherBar />
        <SearchResults />
      </div>
    );
  }
}
