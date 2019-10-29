import React from 'react'
import GeocodingApiService from '../../services/geocoding-api-service'
// import {SearchProvider} from '../../contexts/SearchContext'

export default class CurrLocBtn extends React.Component{
  // static contextType = SearchContext
  state = {loading: false}

  getLocation = () => {
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
        console.log(res.results[0].address_components[0].long_name)
        // this.context.
      } catch(err){
        console.log(err)
      }
      this.setState({loading: false})
    }

    const error = (err) => {
      console.log(err)
      this.setState({loading: false})
    }

    const currLoc = navigator.geolocation.getCurrentPosition(success, error, options)
    
  }

  render(){
    return(
      <button onClick={this.getLocation}>Current Location</button>
    )
  }
}