import React from 'react'
import './MyEventsPage.css'
import SearchContext from '../../contexts/SearchContext'
import SavedEvent from '../../components/SavedEvent/SavedEvent'
export default class MyEventsPage extends React.Component {

  state = {loading: true}

  static contextType = SearchContext

  componentDidMount () {
    this.context.getSavedEvents()
    this.setState({loading: false})
  }

  render(){
    if (this.state.loading) {
      return (
        <div className='MyEventsPage'>
          <h2>My saved events</h2>
          <h3>Loading....</h3>
        </div>
      )
    }

    const myEvents = this.context.savedEvents

    if (myEvents.length === 0) {
      return(
        <div className='MyEventsPage'>
          <h2>My saved events</h2>
          <h3>You currently have no saved events</h3>
        </div>
      )
    }

    const eventList = myEvents.map(event => 
      <li key={event.fetch_id}>
        <SavedEvent 
          key={event.id}
          id={event.id}
          name={event.name}
          url={event.url}
          description={event.description}
          venue={event.venue}
          address={event.address}
          start_time={event.start_time}
          stop={event.stop || 'unknown'}
          image={event.image}
          removeEvent={this.context.removeEvent}
        />
      </li>
    )

    return (
      <div className='MyEventsPage'>
        <h2>My saved events</h2>
        <ul>
          {eventList}
        </ul>        
      </div>
    )
    
  }
}