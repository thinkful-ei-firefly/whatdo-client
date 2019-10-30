import React from 'react'
import './SignInPage.css'
import SignInForm from '../../components/SignInForm/SignInForm'

export default class LoginPage extends React.Component{

  onSuccessfulSignIn = () => {
    // fetch the user's favorites
    this.props.getFavs()
    // and send them back to the events page
    return this.props.history.push('/eventsPage')
    // should update this to show a 'Success' message on next page
  }

  render(){
    return(
      <div className='LoginPage'>
        <SignInForm onSuccessfulSignIn={this.onSuccessfulSignIn}/>
      </div>
    )
  }
}