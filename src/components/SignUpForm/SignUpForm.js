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
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
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