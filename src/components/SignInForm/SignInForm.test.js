import React from 'react'
import ReactDOM from 'react-dom'
import SignInForm from './SignInForm'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe('<SignInForm/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <SignInForm />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <SignInForm />
      </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
