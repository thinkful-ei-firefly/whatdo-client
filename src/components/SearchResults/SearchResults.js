import React from 'react'
import EventItem from '../EventItem/EventItem'

export default class SearchResults extends React.Component{

  render(){
    return(
      <div className="SearchResults">
        <ul>
          <li><EventItem /></li>
        </ul>
        
      </div>
    )
  }
}