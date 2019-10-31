import React from 'react'
import SearchContext from '../../contexts/SearchContext'
import './PageBar.css'

export default class PageBar extends React.Component {
  state = { loading: false }

  static contextType = SearchContext

  asyncSetState = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  handlePagePrev = async () => {
    this.asyncSetState({loading: true})
      .then(res => this.context.prevPage())
      .then(res => this.setState({loading: false}))
  }

  handlePageNext = async () => {
    this.asyncSetState({loading: true})
      .then(res => this.context.nextPage())
      .then(res => this.setState({loading: false}))    
  }

  render () {
    return (
      <div className="pagination-bar">
        <button 
          className="pagination-prev-next-button" 
          disabled={this.state.loading}
          onClick={this.handlePagePrev}
        >
          <a href="#scroll-target">{'<< Prev'}</a>          
        </button>

        <span className="pagination-page-num">  -  Page {this.context.pageNum} of {this.context.pageCount}  -  </span>

        <button 
          className="pagination-prev-next-button" 
          disabled={this.state.loading}
          onClick={this.handlePageNext}
        >
          <a href="#scroll-target">{'Next >>'}</a>
        </button>
      </div>
    );
  }
}