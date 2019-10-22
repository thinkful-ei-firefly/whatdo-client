import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './App.css'

import LandingPage from '../../routes/LandingPage/LandingPage'
import EventPage from '../../routes/EventPage/EventPage'
import EventsPage from '../../routes/EventsPage/EventsPage'
import SignInPage from '../../routes/SignInPage/SignInPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/signUp'} component={SignUpPage} />
        <Route path={'/signIn'} component={SignInPage} />
        {/* PublicOnlyRoute
            PrivateOnlyRoute */}
        <Route path={'/eventsPage'} component={EventsPage} />
        <Route path={'/eventPage'} component={EventPage} />

        <Route component={'NotFound'} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
