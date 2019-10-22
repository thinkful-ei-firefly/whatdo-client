import config from '../config'

const EventApiService = {

  async eventSearch (zipCode, distance, date, categories) {
    //must format incoming date to YYYYMMDD00-YYYYMMDD00 format for search to work properly
    const datestring = '2019103100-2019103100'
    //All acceptable categories listed here. Multiple categories should be separated by commas
    const categorystring = 'music,conference,comedy,learning_education,family_fun_kids,festivals_parades,movies_film,food,fundraisers,art,support,holiday,books,attractions,community,business,singles_social,schools_alumni,clubs_association,outdoors_recreation,performing_arts,animals,politics_activism,sales,science,religion_spirituality,sports,technology,other'
    const res = await fetch (`${config.EVENTFUL_SEARCH_ENDPOINT}&location=${zipCode}&within=${distance}&date=${datestring}`)
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