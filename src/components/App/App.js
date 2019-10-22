import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import EventPage from '../../routes/EventPage/EventPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        {/* PublicOnlyRoute
            PrivateOnlyRoute */}
        <Route path={'/eventPage'} component={EventPage} />

        <Route component={'NotFound'}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
