import React from 'react'
import ReactDOM from 'react-dom'
import Search from './Search'
import renderer from 'react-test-renderer'

describe('<Search />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <Search/>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
