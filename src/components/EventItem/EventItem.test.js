import React from 'react'
import ReactDOM from 'react-dom'
import EventItem from './EventItem'
import renderer from 'react-test-renderer'

describe('<EventItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<EventItem />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders as expected', () => {
    const tree = renderer
      .create(<EventItem  
        name='Event Name' 
        url='https://www.event.com' 
        description='An event of events for events by events'
        venue='Event Venue' 
        address='9999 Event Avenue, Event Town, Florida 33301' 
        start='2019-10-30 17:00:00' 
        stop='2019-10-30 23:00:00' 
        image={'../../assets/test-images/event-test-image.jpeg'}
      />)
      .toJSON()

      expect(tree).toMatchSnapshot()
  })
})
