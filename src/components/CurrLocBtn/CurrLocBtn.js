import React from 'react';
import GeocodingApiService from '../../services/geocoding-api-service';
import SearchContext from '../../contexts/SearchContext';

import './CurrLocBtn.css';

export default class CurrLocBtn extends React.Component {
  static contextType = SearchContext;
  state = { loading: false };

  getLocation = () => {
    this.setState({ loading: true });

    const options = {
      timeout: 5000,
      enableHighAccuracy: false,
      maximumAge: 0
    };

    const success = async pos => {
      try {
        const { latitude, longitude } = pos.coords;
        const res = await GeocodingApiService.getZip(latitude, longitude);
        const zipCode = res.results[0].address_components[0].long_name;
        this.context.setZipCode(zipCode);
        this.setState({ loading: false });
      } catch (err) {
        console.log(err);
      }
    };

    const error = err => {
      // console.log('ERROR')
      // console.log(err.message)
      this.setState({ loading: false });
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  render() {
    return (
      <button
        onClick={this.getLocation}
        className="CurrLocBtn"
        type="button"
      ></button>
    );
  }
}
