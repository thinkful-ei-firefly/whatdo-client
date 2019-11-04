import React from 'react'
import CurrLocBtn from './CurrLocBtn'
import renderer from 'react-test-renderer'

describe('<CurrLocBtn />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <CurrLocBtn />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})