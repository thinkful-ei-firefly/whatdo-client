import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {



  
  render() {
    return (
      <nav className='login-controls'  role='navigation'>
      <input type="checkbox" id="chk"></input>
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-ellipsis-h"></i>
        </label>
    
        <ul className="menu">

        <Link to='/' className="btn btn4">Home</Link>

        <Link to='/myEventsPage' className="btn btn4">My Event</Link>

        {/** 
        TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()
        */}
        {/**demo  login & register*/}
        <Link to='/login' className="btn btn4">Login</Link>
        <Link to='/register' className="btn btn4">Sign up</Link>


        <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times"></i>
          </label>
        </ul>
      </nav>
    )
  }
}
