import React from 'react'
import './SignInPage.css'
import SignInForm from '../../components/SignInForm/SignInForm'

export default class LoginPage extends React.Component{

  onSuccessfulSignIn = () => {
     // should update this to show a 'Success' message on next page
    return this.props.history.push('/eventsPage')
  }

  render(){
    return(
      <div className='LoginPage'>
        <SignInForm onSuccessfulSignIn={this.onSuccessfulSignIn}/>
      </div>
    )
  }
}