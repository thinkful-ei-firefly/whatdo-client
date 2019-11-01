import React from 'react'
import './ErrorBar.css'

export default class ErrorBar extends React.Component {

  render () {
    return (
      <div className="fetch-error-bar">
        <h2 className="error-bar-header">We're sorry, the server is experiencing some difficulties.</h2>
        <h3>Please wait a few minutes or refresh the page and try again.</h3>
      </div>
    );
  }
}
