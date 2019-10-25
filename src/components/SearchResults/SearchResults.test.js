import React from 'react'
import ReactDOM from 'react-dom'
import SearchResults from './SearchResults'
import renderer from 'react-test-renderer'

describe('<SearchResults />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchResults />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders as expected', () => {
    const tree = renderer.create(<SearchResults />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
