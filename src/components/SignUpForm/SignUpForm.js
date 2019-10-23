import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Link } from 'react-router-dom'


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

      <div className="signup-form">
      <form className="SignUpForm" onSubmit={this.handleSubmit}>
        <div className="alert">{error && <p>{error}</p>}</div>
      <h1>Sign Up</h1>
      <input className="txtb" autoComplete='off' type="text" id="username" name="username" placeholder="Username" required />
      <input className="txtb" autoComplete='off' type="text" id="nickname" name="nickname" placeholder="Nickname" required />
      <input className="txtb" autoComplete='off' type="email" id="email" name="email" placeholder="Email" required />
      <input className="txtb" type="password" id="password" name="password" placeholder="Password" required />
      <input className="signup-btn" type="submit" value="Sign Up!"/>
      <Link to='/' className="alreadyHaveAcc">Already Have one ?</Link>
      </form>
      </div>
    )
  }
}