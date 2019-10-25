import React from 'react'
import ReactDOM from 'react-dom'
import WeatherIcon from './WeatherIcon'
import renderer from 'react-test-renderer'
import { exportAllDeclaration } from '@babel/types'

describe('<WeatherIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WeatherIcon />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders properly', () => {
    const tree = renderer.create(
      <WeatherIcon dt="2019-10-29" iconUrl="" description="hot" temp_hi="99" temp_low="0" />
    )
    expect(tree).toMatchSnapshot()
  })
})
