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
    searchedTerms: {
      zipCode: '30084',
      distance: 10,
      date: this.getDate(),
      music: false,
      attractions: false,
      bars: false,
      sports: false,
      performingArts: false,
      festivals: false
    },
    distance: 10,
    date: this.getDate(),
    categories: 'music,sports,outdoors_recreation,attractions,performing_arts,comedy,food,singles_social,festivals_parades,holiday',
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
    savedEvents: [],
    loading: false,
    fetchError: false
  };

  getDate() {
    const today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    } else {
      month = '' + month;
    }
    if (day < 10) {
      day = '0' + day;
    } else {
      day = '' + day;
    }

    const date = today.getFullYear() + '-' + month + '-' + day;
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
    this.toggleLoading();
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

      const {
        music,
        sports,
        attractions,
        performingArts,
        bars,
        festivals
      } = this.state;

      const searchedTerms = {
        zipCode,
        distance,
        date,
        music,
        sports,
        attractions,
        performingArts,
        bars,
        festivals
      };

      const newState = {
        city: weatherJsonData.city.name,
        weather: weatherReport,
        events: eventList,
        categories,
        searchedTerms,
        pageNum,
        pageCount: parseInt(eventJsonData.page_count),
        fetchError: false
      };

      this.setState(newState);
      this.toggleLoading();
    } catch (err) {
      this.toggleLoading();
      this.setState({fetchError: true})
      console.log(err);
    }
  };

  nextPage = async () => {
    if (this.state.pageNum < this.state.pageCount) {
      const { zipCode, date, distance, categories, pageNum } = this.state;
      this.apiSearch (
        zipCode,
        distance,
        date,
        categories,
        pageNum + 1
      )
    }      
  };

  prevPage = async () => {
    if (this.state.pageNum > 1) {
      const { zipCode, date, distance, categories, pageNum } = this.state;
      this.apiSearch (
        zipCode,
        distance,
        date,
        categories,
        pageNum + 1
      )
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

  setZipCode = zipCode => {
    this.setState({ zipCode });
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
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
      searchedTerms: this.state.searchedTerms,
      apiSearch: this.apiSearch,
      getSavedEvents: this.getSavedEvents,
      saveEvent: this.saveEvent,
      removeEvent: this.removeEvent,
      setSearchTerm: this.setSearchTerm,
      setChecked: this.setChecked,
      setZipCode: this.setZipCode,
      pageNum: this.state.pageNum,
      pageCount: this.state.pageCount,
      prevPage: this.prevPage,
      nextPage: this.nextPage,
      loading: this.state.loading,
      toggleLoading: this.toggleLoading,
      fetchError: this.state.fetchError
    };

    return (
      <div className="App">
        <SearchContext.Provider value={searchContextValue}>
          <Header />
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/signUp'} component={SignUpPage} />
            <PublicOnlyRoute
              path={'/signIn'}
              component={() => <SignInPage getFavs={this.getSavedEvents} />}
            />
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
