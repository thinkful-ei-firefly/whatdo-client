import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PublicOnlyRoute from '../../components/utils/PublicRoute'
import PrivateOnlyRoute from '../../components/utils/PrivateRoute'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './App.css'

import LandingPage from '../../routes/LandingPage/LandingPage'
import EventPage from '../../routes/EventPage/EventPage'
import EventsPage from '../../routes/EventsPage/EventsPage'
import SignInPage from '../../routes/SignInPage/SignInPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <PublicOnlyRoute path={'/signUp'} component={SignUpPage} />
        <PublicOnlyRoute path={'/signIn'} component={SignInPage} />
        <PrivateOnlyRoute path={'/eventsPage'} component={EventsPage} />
        <PrivateOnlyRoute path={'/eventPage'} component={EventPage} />
        {/* <Route path={'/signUp'} component={SignUpPage} /> */}
        {/* <Route path={'/signIn'} component={SignInPage} /> */}
        {/* <Route path={'/eventsPage'} component={EventsPage} /> */}
        {/* <Route path={'/eventPage'} component={EventPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
