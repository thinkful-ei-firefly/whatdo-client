const eventDataHelpers = {

  todayStr () {
    const now = new Date(Date.now());
    let dateStr = `${now.getFullYear()}${now.getMonth()+1}${now.getDate()}00`
    dateStr = `${dateStr}-${dateStr}`
    return dateStr;
  },

  allCatStr () {
    return 'music,comedy,learning_education,family_fun_kids,festivals_parades,movies_film,food,fundraisers,art,holiday,books,attractions,singles_social,outdoors_recreation,performing_arts,politics_activism,science,religion_spirituality,sports,technology'
  },

  parseEventList (json) {
    const eventData = json.events.event.map(event => {
      let eventSnapshot = {
        id: event.id,
        name: event.title,
        description: event.description,
        start_time: event.start_time,
        stop_time: event.stop_time,
        address: `${event.venue_address}, ${event.city_name}, ${event.region_name}`,
        venue: event.venue_name,
        url: event.url,
      }
      return eventSnapshot
    })
    return eventData
  }

}

export default eventDataHelpers