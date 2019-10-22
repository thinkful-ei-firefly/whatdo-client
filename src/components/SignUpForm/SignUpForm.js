import React from 'react'
import AuthApiService from '../../services/auth-api-service'

export default class SignUpForm extends React.Component{

  state = {error: null}

  handleSubmit = async e => {
    e.preventDefault()
    const {username, password, nickname, email} = e.target
    const newUser = {
      username: username.value,
      password: password.value,
      nickname: nickname.value,
      email: email.value
    }

    try{
      const createdUser = await AuthApiService.createAccount(newUser)
      username.value = ''
      password.value = ''
      nickname.value = ''
      console.log('Account Created!')
      console.log(createdUser)
    } catch(err){
      this.setState({error: err.error})
    }
  }

  render(){
    const {error} = this.state
    return(
      <form className="SignUpForm" onSubmit={this.handleSubmit}>
        <div className="alert">{error && <p>{error}</p>}</div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="nickname">Nickname</label>
          <input type="text" id="nickname" name="nickname" required />
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