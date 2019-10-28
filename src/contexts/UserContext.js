import React from 'react'
import TokenService from '../services/token-service'

export const UserContext = React.createContext()

export class UserProvider extends React.Component{
  state = {
    user:null,
    error:null
  }

  setUser = user => {
    // console.log('set user')
    this.setState({user})
  }
  logoutUser =() => {
    TokenService.clearAuthToken()
    this.setState({user: null})
  }
  setError = err => {
    this.setError({err})
  }
  clearError = err => {
    this.set({err})
  }

  render(){
    // console.log('UserContext')
    const value = {
      user: this.state.user,
      error: this.state.error,
      setUser: this.setUser,
      logoutUser: this.logoutUser,
      setError: this.setError,
      clearError: this.clearError 
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export const UserContextConsumer = UserContext.Consumer