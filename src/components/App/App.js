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
    distance: 10,
    date: this.getDate(),
    categories: '',
    prettyCategories: '',
    music: false,
    attractions: false,
    bars: false,
    sports: false,
    performingArts: false,
    festivals: false,
    weather: [],
    events: [],
    pageNum: 1,
    pageCount: 1,
    savedEvents: []
  };

  getDate() {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    return date;
  }

  apiSearch = async (
    zipCode,
    distance = 10,
    date,
    categories = eventDataHelpers.allCatStr(),
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
        date,
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
        weather: weatherReport,
        events: eventList,
        zipCode,
        distance,
        date,
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
          date,
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
          date,
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

  setSearchTerm = ev => {
    const key = ev.target.name;
    this.setState({ [key]: ev.target.value });
  };

  setChecked = ev => {
    const key = ev.target.name;
    this.setState({ [key]: !this.state[key] });
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
      music: this.state.music,
      attractions: this.state.attractions,
      bars: this.state.bars,
      sports: this.state.sports,
      performingArts: this.state.performingArts,
      festivals: this.state.festivals,
      apiSearch: this.apiSearch,
      getSavedEvents: this.getSavedEvents,
      saveEvent: this.saveEvent,
      removeEvent: this.removeEvent,
      setSearchTerm: this.setSearchTerm,
      setChecked: this.setChecked,
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
            <PublicOnlyRoute path={'/signIn'} component={() => <SignInPage getFavs={this.getSavedEvents} />} />
            <Route path={'/eventsPage'} component={EventsPage} />
            <PrivateOnlyRoute path={'/eventPage'} component={EventPage} />
            <PrivateOnlyRoute path={'/myEventsPage'} component={MyEventsPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </SearchContext.Provider>
      </div>
    );
  }
}

export default App;
