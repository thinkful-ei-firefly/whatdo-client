import React from 'react'
import ErrorBar from './ErrorBar'
import renderer from 'react-test-renderer'

describe('<ErrorBar />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <ErrorBar />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})