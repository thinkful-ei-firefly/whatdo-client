import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import { UserContext } from '../../contexts/UserContext'
import { Link } from 'react-router-dom'
import LoadingLogin from '../LoadingLogin/LoadingLogin'
// import Loading from '../Loading/Loading'

export default class SignInForm extends React.Component {
  static contextType = UserContext
  state = { error: null, loading: false }

  handleSubmit = async e => {
    e.preventDefault()
    const { username, password } = e.target
    const loginCredentials = {
      username: username.value,
      password: password.value
    }

    try {
      this.setState({ loading: !this.state.loading })
      const token = await AuthApiService.login(loginCredentials)
      TokenService.saveAuthToken(token.authToken)
      // console.log('log in success!')
      // set context
      this.context.setUser({ username: username.value })
      // should update this to show a 'Success' message on next page
      this.setState({ loading: !this.state.loading })
      this.props.onSuccessfulSignIn()
    } catch (err) {
      this.setState({ error: err.error })
      this.setState({ loading: !this.state.loading })
    }
  }

  render() {
    const { error, loading } = this.state
    return <LoadingLogin />
    // if (loading) {
    //   return <LoadingLogin />
    // } else {
    //   return (
    //     <div className="SignInForm">
    //       <form className="box" onSubmit={this.handleSubmit}>
    //         <div className="alert ">{error && <p>{error}</p>}</div>
    //         <h1>Login</h1>
    //         <input
    //           className="txtb"
    //           type="text"
    //           autoComplete="off"
    //           id="username"
    //           name="username"
    //           required
    //           placeholder="Username"
    //         />
    //         {/**
    //   <label htmlFor="pass">Password</label>
    //   */}

    //         <input
    //           className="txtb"
    //           type="password"
    //           id="password"
    //           name="password"
    //           placeholder="Password"
    //           required
    //         />

    //         <input className="signin-btn" type="submit" value="Sign In" />
    //         <Link to="/signUp" className="haventAccYet">
    //           Don’t have an account ?
    //         </Link>
    //       </form>
    //     </div>
    //   )
    // }
  }
}
