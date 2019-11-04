import React from 'react'
import FavoritesList from './FavoritesList'
import renderer from 'react-test-renderer'

describe('<FavoritesList />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <FavoritesList />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})