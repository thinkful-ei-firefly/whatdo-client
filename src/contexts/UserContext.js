import React from "react";
import TokenService from "../services/token-service";

export const UserContext = React.createContext();

export class UserProvider extends React.Component {
  state = {
    user: null,
    error: null
  };

  setUser = user => {
    this.setState({ user });
  };

  logoutUser = () => {
    document.getElementById("chk").checked = false;
    TokenService.clearAuthToken();
    this.setState({ user: null });
  };

  setError = err => {
    this.setError({ err });
  };

  clearError = err => {
    this.set({ err });
  };

  render() {

    const value = {
      user: this.state.user,
      error: this.state.error,
      setUser: this.setUser,
      logoutUser: this.logoutUser,
      setError: this.setError,
      clearError: this.clearError
    };
    
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserContextConsumer = UserContext.Consumer;
