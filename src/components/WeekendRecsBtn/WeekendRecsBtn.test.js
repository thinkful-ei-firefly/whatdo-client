import React from 'react'
import WeekendRecsBtn from './WeekendRecsBtn'
import renderer from 'react-test-renderer'

describe('<WeekendRecsBtn />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <WeekendRecsBtn />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})