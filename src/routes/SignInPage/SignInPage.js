import React from 'react'

import SignInForm from '../../components/SignInForm/SignInForm'

export default class LoginPage extends React.Component{

  onSuccessfulSignIn = () => {
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