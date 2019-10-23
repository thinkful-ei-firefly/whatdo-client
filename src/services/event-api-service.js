import config from '../config'
import eventDataHelpers from '../helpers/event-data-helpers'

const EventApiService = {

  async eventSearch (
      zipCode, 
      distance=10, 
      date=eventDataHelpers.todayStr(), 
      categories=eventDataHelpers.allCatStr(), 
      pageNum=1, 
      pageSize=10) {
    //MUST format incoming date to YYYYMMDD00-YYYYMMDD00 format for search to work properly
    //Multiple categories MUST be separated by commas
    //Bounce fetch call off an external site to bypass CORS (endpoint doesn't return valid CORS headers)
    const CORSanywhere = 'https://cors-anywhere.herokuapp.com/'
    const res = await fetch(`${CORSanywhere}${config.EVENTFUL_SEARCH_ENDPOINT}&location=${zipCode}&within=${distance}&date=${date}&category=${categories}&page_size=${pageSize}&page_number=${pageNum}`)
    if (!res.ok){
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  },

  async getEventById (eventId) {
    const res = await fetch (`${config.EVENTFUL_SINGLE_EVENT_ENDPOINT}&id=${eventId}`)
    if (!res.ok){
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  }

}

export default EventApiService