import React from 'react'
import SearchContext from '../../contexts/SearchContext'

import Search from '../../components/Search/Search'
import SearchResults from '../../components/SearchResults/SearchResults'
import WeatherBar from '../../components/WeatherBar/WeatherBar'
import './EventsPage.css'

export default class EventsPage extends React.Component {

  static contextType = SearchContext
  
  handleSubmit (ev) {
    ev.preventDefault()
    console.log('form submitted!')
    const zipCode = ev.target.zipCode.value
    const distance = ev.target.distance.value
    const date = new Date(ev.target.date.value)

    let categories = []

    for (let i=1; i<= 6; i++) {
      if (ev.target[`box${i}`].checked) categories.push(`${ev.target[`box${i}`].value}`)
    }

    categories = categories.join()

    if (!categories) categories = 'music,sports,outdoors_recreation,attractions,performing_arts,comedy,food,singles_social,festivals_parades,holiday'

    this.context.apiSearch(zipCode, distance, date, categories)
    //once SearchResults page is hooked up to context, modify apiSearch to return a promise
    //then add a .then chain to history.push the user to the results page

  }

  render() {
    return (
      <div className="EventsPage">
        

      <div className='EventsPage__Search'>
      
      <form className='EventsPage__form '  onSubmit={ev => this.handleSubmit(ev)} >
      {/**
      <div role='alert' className='alert' >
          {error && <p>{error}</p>}
        </div>
      */}
        

        <div className='EventsPage__form-section'>
          
          <input type="text"
          className='input'
          defaultValue='23451'
            id='zipCode'
            name='zipCode'
            autoComplete='off'
            required
          />
          <label 
          className='label-name'
          htmlFor='zipCode'>
          <span className='content-name' >Enter your zipcode</span>  
          </label>
        </div>

        <div className='EventsPage__form-section'>
          
          <input
          type="text"
          className='input'
          defaultValue='50'
            id='distance'
            name='distance'
            autoComplete='off'
            required
          />
          <label 
          className='label-name'
          htmlFor='distance'>
          <span className='content-name' >Miles around you</span>  
          </label>
        </div>

          <div className='EventsPage__form-section date'>
          <input
          className='input'
            type="date"
            id="date"
            name="date"
            defaultValue="2019-10-21"
            min="2019-01-01"
            max="2019-12-31"
          />
          </div>
          
          
          

          <div className='EventsPage__checkbox__section' role='checkbox' >
         

        <input type="checkbox" id='box1' name='categories' value='music'></input>
        <label htmlFor="box1" >Music</label>
        <input type="checkbox" id='box2' name='categories' value='sports,outdoors_recreation'></input>
        <label htmlFor="box2" >Sports</label>
        <input type="checkbox" id='box3' name='categories' value='attractions'></input>
        <label htmlFor="box3" >Attractions</label>
        <input type="checkbox" id='box4' name='categories' value='performing_arts,comedy'></input>
        <label htmlFor="box4" >Arts</label>
        <input type="checkbox" id='box5' name='categories' value='food,singles_social'></input>
        <label htmlFor="box5" >Bars</label>
        <input type="checkbox" id='box6' name='categories' value='festivals_parades,holiday'></input>
        <label htmlFor="box6" >Festivals</label>

        </div>
       

          <div className='form-btn' >
        <button className='EventsPage__searchForm__btn' type='submit'>
          Search
        </button>
        </div>
        
        
        </form>
      
      </div>

        <WeatherBar  />
        <SearchResults />
      </div>
    )
  }
}
