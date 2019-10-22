import React from 'react'
import './SignInPage.css'
import SignInForm from '../../components/SignInForm/SignInForm'

export default class LoginPage extends React.Component{

  render(){
    return(
      <div className='SignInPage'>
        <SignInForm />
      </div>
    )
  }
}