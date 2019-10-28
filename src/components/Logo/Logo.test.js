import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import renderer from 'react-test-renderer'

describe('Logo Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders as expected', () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON()

      expect(tree).toMatchSnapshot()
  })
});
