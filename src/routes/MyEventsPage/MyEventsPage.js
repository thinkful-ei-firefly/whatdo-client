import React from 'react';
import './MyEventsPage.css';
import FavoritesList from '../../components/FavoritesList/FavoritesList'
import WeekendRecsBtn from '../../components/WeekendRecsBtn/WeekendRecsBtn'

export default class MyEventsPage extends React.Component {

  render() {    
    return (
      <div className="MyEventsPage__container">
        <div className="MyEventsPage">          
          <WeekendRecsBtn />
          <FavoritesList />
        </div>
      </div>
    );
  }
}
