import React from 'react'

export default class SignUpForm extends React.Component{

  handleSubmit = e => {
    e.preventDefault()
    console.log('Submit SignUp')
  }

  render(){
    return(
      <form className="SignUpForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="nickName">Nick Name</label>
          <input type="text" id="nickName" name="nickName" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <input type="checkbox" name="termsPolicy" id="termsPolicy" required/>
        <label htmlFor="TermsPolicy">I accept Term of use & privacy policy</label>

        <input type="submit" value="Sign Up!"/>
      </form>
    )
  }
}