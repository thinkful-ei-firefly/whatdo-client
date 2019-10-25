import React from 'react'
import ReactDOM from 'react-dom'
import WeatherBar from './WeatherBar'
import renderer from 'react-test-renderer'
// import {SearchProvider} from '../../contexts/SearchContext'

describe('<WeatherBar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WeatherBar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  // WILL NEED TO ADD CONTEXT
  it('renders properly', () => {
    const tree = renderer.create(
        <WeatherBar />
    )
    expect(tree).toMatchSnapshot()
  })
})
