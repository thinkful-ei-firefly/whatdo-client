import React from 'react'
import Nav from '../Nav/Nav'

import './Header.css'

export default class Header extends React.Component{

  render(){
    return(
      <div className='Header'>
        <Nav />
      </div>
    )
  }
}