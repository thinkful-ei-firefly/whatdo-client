import config from '../config'

const GeocodingApiService = {
  async getZip(lat, long) {
    // lat = 26.120497099999998
    // long = -80.114553
    // console.log(lat, long)
    // console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    // console.log(`${config.GOOGLE_GEOCODING_ENDPOINT}latlng=${lat},${long}&result_type=postal_code&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    const res = await fetch(
      `${config.GOOGLE_GEOCODING_ENDPOINT}latlng=${lat},${long}&result_type=postal_code&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    )
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  }
}

export default GeocodingApiService
