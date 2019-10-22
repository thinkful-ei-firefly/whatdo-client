import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

export default class SignInForm extends React.Component{
  state = {error: null, loading: false}

  handleSubmit = async e => {
    e.preventDefault()
    // console.log('Clicked LogIn')
    const {username, password} = e.target
    // console.log(username.value, password.value)
    const loginCredentials = {
      username: username.value,
      password: password.value
    }

    try{
      const user = await AuthApiService.login(loginCredentials)
      TokenService.saveAuthToken(user.authToken)
      // set context
      console.log('log in success!')
    } catch(err){
      this.setState({error: err.error})
    }
  
  }

  render(){
    const { error } = this.state 
    return(
      <div className='SignInForm' >
        <div className="alert ">{error && <p>{error}</p>}</div>
        <form className='box' onSubmit={this.handleSubmit}>

          <h1>Login</h1>
          <input type="text"  autoComplete='off' id="username" name="username" required placeholder="Username" />
      {/**
      <label htmlFor="pass">Password</label>
      */}
          
          <input type="password" id="password" name="password" placeholder="Password" required />

          <input type="submit" value="Sign In"/>
        </form>
      </div>
    )
  }
}