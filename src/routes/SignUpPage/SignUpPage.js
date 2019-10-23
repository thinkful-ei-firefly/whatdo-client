import React from 'react'
import './SignUpPage.css'

import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default class SignUpPage extends React.Component{

  onSuccessfulSignUp = () => {
     // should update this to show a 'Success' message on next page
    return this.props.history.push('/eventsPage')
  }

  render(){
    return(
      <div className="SignUpPage">
        <SignUpForm onSuccessfulSignUp={this.onSuccessfulSignUp}/>
      </div>
    )
  }
}