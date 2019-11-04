import React from 'react'
import PageBar from './PageBar'
import renderer from 'react-test-renderer'

describe('<PageBar />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <PageBar />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})