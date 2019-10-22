import React from 'react'
import Search from '../../components/Search/Search'
import SearchResults from '../../components/SearchResults/SearchResults'

export default class LandingPage extends React.Component{

  render(){
    return(
      <div>
        <Search />
        <SearchResults />
      </div>
    )
  }
}