import React from 'react'
import SavedEvent from './SavedEvent'
import renderer from 'react-test-renderer'

describe('<SavedEvent />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <SavedEvent />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})