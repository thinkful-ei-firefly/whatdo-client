import React from 'react'
import FavoritesList from './FavoritesList'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import SearchContext from '../../contexts/SearchContext'
// import Search from '../Search/Search'

describe('<FavoritesList />', () => {
  const contextValue = {
    getSavedEvents: () => ['events'],
    savedEvents: ['events']
  }
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <SearchContext.Provider value={contextValue}>
        <FavoritesList />
      </SearchContext.Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <SearchContext.Provider value={contextValue}>
          <FavoritesList />
        </SearchContext.Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
