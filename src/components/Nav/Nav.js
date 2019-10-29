import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import TokenService from "../../services/token-service";
import { UserContext } from "../../contexts/UserContext";

export default class Nav extends React.Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.logoutUser();
  };

  handleUncheck = () => {
    document.getElementById("chk").checked = false;
  };

  render() {
    return (
      <nav className="header__nav" role="navigation">
        <input type="checkbox" id="chk"></input>
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-ellipsis-h"></i>
        </label>

        <ul className="menu">
          <Link
            to="/eventsPage"
            className="btn btn2"
            onClick={this.handleUncheck} //.prop("checked", false)}
          >
            Events
          </Link>

          <Link
            to="/myEventsPage"
            className="btn btn2"
            onClick={this.handleUncheck}
          >
            My Event
          </Link>

          {TokenService.hasAuthToken() ? (
            <Link to="/" className="btn btn2" onClick={this.handleLogoutClick}>
              Sign Out
            </Link>
          ) : (
            <>
              <Link
                to="/signIn"
                className="btn btn2"
                onClick={this.handleUncheck}
              >
                Sign in
              </Link>{" "}
              <Link
                to="/signUp"
                className="btn btn2"
                onClick={this.handleUncheck}
              >
                Sign up
              </Link>
            </>
          )}

          {/**demo  login & register*/}
          {/* <Link to="/signUp" className="btn btn2">
            Sign up
          </Link> */}

          <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times"></i>
          </label>
        </ul>
      </nav>
    );
  }
}
