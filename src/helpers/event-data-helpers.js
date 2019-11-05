const eventDataHelpers = {

  todayStr () {
    //returns a string in the format YYYYMMDD00-YYYYMMDD00 representing the current date
    const now = new Date(Date.now());
    let dateStr = `${now.getFullYear()}${now.getMonth()+1}${now.getDate()}00`
    dateStr = `${dateStr}-${dateStr}`
    return dateStr;
  },

  searchDateStr (date) {
    //given a date object, returns a string in the format YYYYMMDD00-YYYYMMDD00
    let dateStr = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}00`
    dateStr = `${dateStr}-${dateStr}`
    return dateStr;
  },

  allCatStr () {
    return 'music,comedy,learning_education,family_fun_kids,festivals_parades,movies_film,food,fundraisers,art,holiday,books,attractions,singles_social,outdoors_recreation,performing_arts,politics_activism,science,religion_spirituality,sports,technology'
  },

  parseEventList (json) {
    //takes an incoming JSON object and extracts the useful data, returning an array of events
    if (!json.events) return [];
    const eventData = json.events.event.map(event => {

      let addressData = [event.venue_address, event.city_name, event.region_name];
      addressData = addressData.filter(item => !!item && item.length > 2);
      addressData = addressData.join(', ')
      
      let description = event.description || 'Visit the site for more information!'
      description = this.strip(description)

      let eventSnapshot = {
        id: event.id,
        name: event.title,
        description: description || 'Visit the site for more information!',
        start_time: event.start_time,
        stop_time: event.stop_time,
        address: addressData,
        city_name: event.city_name,
        region_name: event.region_name,
        venue: event.venue_name,
        image: event.image,
        url: event.url,
      }
      return eventSnapshot
    })
    return eventData
  },

  strip (html) {
    //removes HTML tags and other ugly characters and formatting from a block of text
    let text = new DOMParser().parseFromString(html, 'text/html');
    text = text.body.textContent || ''
    return text.replace(/(<([^>]+)>)/ig,"");
  }

}

export default eventDataHelpers