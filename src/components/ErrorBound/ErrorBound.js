import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorBound.css'

export default class ErrorBound extends React.Component {

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render () {

    if (this.state.hasError) {
      return (
        <div className='ErrorPage'>
          <div className='error-container'>
            <h1 className='error-page-text'>We're Sorry</h1>
            <h2 className='error-page-text'>Something went wrong.</h2>
            <p className='error-page-text'>Please <Link to="/">return to the home page</Link> or refresh and try again.</p>
          </div> 
        </div>
      )
    }

    return this.props.children
  }
}