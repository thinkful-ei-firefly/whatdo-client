import React from 'react'
import Search from '../../components/Search/Search'

export default class LandingPage extends React.Component{

  handleSubmit = () => {
    this.props.history.push('/eventsPage')
  }

  render(){
    return(
      <div>
        
        <Search handleSubmit={this.handleSubmit}/>
        
      </div>
    )
  }
}