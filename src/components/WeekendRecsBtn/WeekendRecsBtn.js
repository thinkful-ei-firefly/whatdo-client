import React from 'react'
import SearchContext from '../../contexts/SearchContext'
import GeocodingApiService from '../../services/geocoding-api-service'
import './WeekendRecsBtn.css'

export default class WeekendRecsBtn extends React.Component {

  static contextType = SearchContext

  state = { zip: '' }

  getLocation = async () => {
    this.setState({loading: true})

    const options = {
      timeout: 5000,
      enableHighAccuracy: true,
      maximumAge: 0
    }

    const success = async (pos) => {
      const {latitude, longitude} = pos.coords
      try{
        const res = await GeocodingApiService.getZip(latitude, longitude)
        this.setState({zip: res.results[0].address_components[0].long_name})
      } catch(err){
        console.log(err.message)
      }
      this.setState({loading: false})
    }

    const error = (err) => {
      console.log(err)
      this.setState({loading: false})
    }

    // eslint-disable-next-line no-unused-vars
    navigator.geolocation.getCurrentPosition((pos) => success(pos), error, options)
  }

  handleClick = async () => {
    //starting with today, step through dates until we hit the next Saturday or Sunday
    let date = new Date(Date.now())
    while (date.getDay() > 0 && date.getDay() < 6) {
      date.setTime(date.getTime()+86400000)
    }
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    } else {
      month = '' + month;
    }
    if (day < 10) {
      day = '0' + day;
    } else {
      day = '' + day;
    }

    date = date.getFullYear() + '-' + month + '-' + day;

    //get the favorite categories of the user
    const userFavorites = this.context.categories || 'music,sports,outdoors_recreation,attractions,performing_arts,comedy,food,singles_social,festivals_parades,holiday'
    
    //get the current/registered zip code of the user
    const zipCode = this.state.zip || this.context.zipCode
    
    //pass everything to the search
    this.context.apiSearch(zipCode, 15, date, userFavorites)

    //redirect to the results page
    this.props.redirectToEvents()

  }

  componentDidMount() {
    this.getLocation()
  }

  render () {
    return (
      <div>
        <button className="weekend_button" onClick={this.handleClick}>What Do this Weekend?</button>
      </div>
    );
  }
}