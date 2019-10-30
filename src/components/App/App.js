import React from 'react';
import { Switch, Route } from 'react-router-dom';

import eventDataHelpers from '../../helpers/event-data-helpers';
import EventApiService from '../../services/event-api-service';
import weatherDataHelpers from '../../helpers/weather-data-helpers';
import WeatherApiService from '../../services/weather-api-service';

import PublicOnlyRoute from '../../components/utils/PublicRoute';
import PrivateOnlyRoute from '../../components/utils/PrivateRoute';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import SearchContext from '../../contexts/SearchContext';

import './App.css';

import LandingPage from '../../routes/LandingPage/LandingPage';
import EventPage from '../../routes/EventPage/EventPage';
import EventsPage from '../../routes/EventsPage/EventsPage';
import SignInPage from '../../routes/SignInPage/SignInPage';
import SignUpPage from '../../routes/SignUpPage/SignUpPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import MyEventsPage from '../../routes/MyEventsPage/MyEventsPage';

class App extends React.Component {
  state = {
    city: 'Tucker',
    zipCode: '30084',
    weather: [],
    date: new Date(Date.now()),
    events: [],
    pageNum: 1,
    pageCount: 1,
    savedEvents: [],
    distance: 10,
    categories: ''
  };

  apiSearch = async (
    zipCode,
    distance = 10,
    date,
    categories = eventDataHelpers.allCatStr(),
    prettyCategories,
    pageNum = 1,
    pageSize = 10
  ) => {
    //send api request to get weather
    //send api request to get events
    //update state
    try {
      const eventJsonData = await EventApiService.eventSearch(
        zipCode,
        distance,
        eventDataHelpers.searchDateStr(date),
        categories,
        pageNum,
        pageSize
      );
      const eventList = eventDataHelpers.parseEventList(eventJsonData);

      const weatherJsonData = await WeatherApiService.weatherReport(zipCode);
      const weatherReport = weatherDataHelpers.parseWeatherReport(
        weatherJsonData
      );

      const newState = {
        city: weatherJsonData.city.name,
        zipCode,
        distance,
        categories: prettyCategories,
        weather: weatherReport,
        date: date,
        events: eventList,
        pageNum: 1,
        pageCount: eventJsonData.page_count
      };

      this.setState(newState);
    } catch (err) {
      console.log(err);
    }
  };

  nextPage = async () => {
    if (this.state.pageNum < this.state.pageCount) {
      try {
        //call the API method for the next page, if not already on the last results page
        //and update the page number and listed events in state
        const { zipCode, date, distance, categories, pageNum } = this.state;
        const eventJsonData = await EventApiService.eventSearch(
          zipCode,
          distance,
          eventDataHelpers.searchDateStr(date),
          categories,
          pageNum + 1,
          10
        );
        const eventList = eventDataHelpers.parseEventList(eventJsonData);

        const newState = {
          pageNum: this.state.pageNum + 1,
          events: eventList
        };

        this.setState(newState);
      } catch (err) {
        console.log(err);
      }
    }
  };

  prevPage = async () => {
    if (this.state.pageNum > 1) {
      try {
        //call the API method for the previous page, if not already on the first page
        //and update the page number and listed events in state
        const { zipCode, date, distance, categories, pageNum } = this.state;
        const eventJsonData = await EventApiService.eventSearch(
          zipCode,
          distance,
          eventDataHelpers.searchDateStr(date),
          categories,
          pageNum - 1,
          10
        );
        const eventList = eventDataHelpers.parseEventList(eventJsonData);

        const newState = {
          pageNum: this.state.pageNum - 1,
          events: eventList
        };

        this.setState(newState);
      } catch (err) {
        console.log(err);
      }
    }
  };

  getSavedEvents = async () => {
    try {
      const myEvents = await EventApiService.getEventsFromDB();
      this.setState({ savedEvents: myEvents.events });
    } catch (err) {
      console.log(err);
    }
  };

  saveEvent = async event => {
    try {
      const newFavorite = await EventApiService.postEventToDB(event);
      this.setState({ savedEvents: [...this.state.savedEvents, newFavorite] });
    } catch (err) {
      console.log(err);
    }
  };

  removeEvent = async eventId => {
    try {
      EventApiService.deleteEventFromDB(eventId);
      this.setState({
        savedEvents: this.state.savedEvents.filter(
          event => event.id !== eventId
        )
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const searchContextValue = {
      city: this.state.city,
      zipCode: this.state.zipCode,
      weather: this.state.weather,
      date: this.state.date,
      events: this.state.events,
      savedEvents: this.state.savedEvents,
      distance: this.state.distance,
      categories: this.state.categories,
      apiSearch: this.apiSearch,
      getSavedEvents: this.getSavedEvents,
      saveEvent: this.saveEvent,
      removeEvent: this.removeEvent,
      pageNum: this.state.pageNum,
      pageCount: this.state.pageCount,
      prevPage: this.prevPage,
      nextPage: this.nextPage
    };

    return (
      <div className="App">
        <SearchContext.Provider value={searchContextValue}>
          <Header />
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/signUp'} component={SignUpPage} />
            <PublicOnlyRoute path={'/signIn'} component={SignInPage} />
            <Route path={'/eventsPage'} component={EventsPage} />
            <PrivateOnlyRoute path={'/eventPage'} component={EventPage} />
            <PrivateOnlyRoute path={'/myEventsPage'} component={MyEventsPage} />
            {/* <Route path={'/signUp'} component={SignUpPage} /> */}
            {/* <Route path={'/signIn'} component={SignInPage} /> */}
            {/* <Route path={'/eventsPage'} component={EventsPage} /> */}
            {/* <Route path={'/eventPage'} component={EventPage} /> */}
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </SearchContext.Provider>
      </div>
    );
  }
}

export default App;
