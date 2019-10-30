import React from 'react';
import './MyEventsPage.css';
import FavoritesList from '../../components/FavoritesList/FavoritesList'
import WeekendRecsBtn from '../../components/WeekendRecsBtn/WeekendRecsBtn'

export default class MyEventsPage extends React.Component {
  redirectToEvents = () => {
    this.props.history.push('/eventsPage');
  }

  render() {    
    return (
      <div className="MyEventsPage__container">
        <div className="MyEventsPage">          
          <WeekendRecsBtn redirectToEvents={this.redirectToEvents}/>
          <FavoritesList />
        </div>
      </div>
    );
  }
}
