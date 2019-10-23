import React from 'react'
import './SignUpPage.css'

import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default class SignUpPage extends React.Component{

  onSuccessfulSignUp = () => {
    return this.props.history.push('/signIn')
  }

  render(){
    return(
      <div className="SignUpPage">
        <SignUpForm />
      </div>
    )
  }
}