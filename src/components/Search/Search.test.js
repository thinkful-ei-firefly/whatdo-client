import React from 'react'
import ReactDOM from 'react-dom'
import Search from './Search'
import renderer from 'react-test-renderer'
import SearchContext from '../../contexts/SearchContext'

describe('<Search />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders as expected', () => {
    const value = {date:'12/12/12'}
    const tree = renderer
      .create(
        <SearchContext.Provider value={value}>
          <Search />
        </SearchContext.Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
