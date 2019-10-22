import React from 'react'

export default class SignInForm extends React.Component{

  handleSubmit = async e => {
    console.log('Clicked LogIn')
  }

  render(){
    return(
      <form className='SignInForm' onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required/>

          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" name="pass" required />

          <input type="submit" value="Sign In"/>
        </div>
      </form>
    )
  }
}