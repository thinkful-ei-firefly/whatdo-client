import React from 'react';
import ReactDOM from 'react-dom';
import SignInForm from './SignInForm';
import renderer from 'react-test-renderer'

describe('<SignInForm/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignInForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<SignInForm />)
    expect(tree).toMatchSnapshot()
  })
})

