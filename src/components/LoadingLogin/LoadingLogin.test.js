import React from 'react'
import LoadingLogin from './LoadingLogin'
import renderer from 'react-test-renderer'

describe('<LoadingLogin />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <LoadingLogin />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})