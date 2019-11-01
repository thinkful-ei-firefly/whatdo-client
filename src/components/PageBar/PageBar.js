import React from 'react'
import SearchContext from '../../contexts/SearchContext'
import './PageBar.css'

export default class PageBar extends React.Component {
  
  static contextType = SearchContext

  render () {
    const loading = this.context.loading
    return (
      <div className="pagination-bar">
        <button 
          className="pagination-prev-next-button" 
          disabled={loading}
          onClick={this.context.prevPage}
        >
          <a href="#scroll-target">{'<< Prev'}</a>          
        </button>

        <span className="pagination-page-num">  -  Page {this.context.pageNum} of {this.context.pageCount}  -  </span>

        <button 
          className="pagination-prev-next-button" 
          disabled={loading}
          onClick={this.context.nextPage}
        >
          <a href="#scroll-target">{'Next >>'}</a>
        </button>
      </div>
    );
  }
}