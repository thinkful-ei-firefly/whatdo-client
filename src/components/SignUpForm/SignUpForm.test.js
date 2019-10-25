import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import renderer from 'react-test-renderer'

describe('<SignUpForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
