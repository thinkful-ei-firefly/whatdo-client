import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {

/*
static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <>
          <Link
            onClick={this.handleLogoutClick}
            to='/Login'
            className="btn btn2">
            Logout
          </Link>
      </>
    )
  }

  renderLoginLink() {
    return (
      <>
        <Link to='/signIn' className="btn btn2">Login</Link>
        <Link to='/signUp' className="btn btn2">Sign up</Link>
      </>
    )
  }
*/

  
  render() {
    return (
      <nav className='login-controls'  role='navigation'>
      <input type="checkbox" id="chk"></input>
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-ellipsis-h"></i>
        </label>
    
        <ul className="menu">

        <Link to='/eventsPage' className="btn btn2">Events</Link>

        <Link to='/myevents' className="btn btn2">My Event</Link>

        {/** 
        TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()
        */}
        {/**demo  login & register*/}
        <Link to='/signIn' className="btn btn2">Sign in</Link>
        <Link to='/signUp' className="btn btn2">Sign up</Link>


        <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times"></i>
          </label>
        </ul>
      </nav>
    )
  }
}
