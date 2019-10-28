import React from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

import './Header.css'

export default class Header extends React.Component{

  render(){
    return(
      <div className='app-header' role='banner'>
      <h1 className='header-h1'>
          <Link to='/' className="header-logo">
            <Logo className="header-logo" />
          </Link>
         
        </h1>
        <Nav />
        
      </div>
    )
  }
}