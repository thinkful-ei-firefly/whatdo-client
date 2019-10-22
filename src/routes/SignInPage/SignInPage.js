import React from 'react'

import SignInForm from '../../components/SignInForm/SignInForm'

export default class LoginPage extends React.Component{

  render(){
    return(
      <div className='LoginPage'>
        <SignInForm />
      </div>
    )
  }
}