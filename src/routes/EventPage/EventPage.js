import React from 'react'

export default class EventPage extends React.Component {
  render() {
    return (
      <div className="EventPage">
        <section>
          <img alt="EventImg" src="" />
          <h2>{'Event Title'}</h2>
          <h3>{'Date'}</h3>
          <h3>{'Location'}</h3>
          <h3>{'Cost'}</h3>
          <article>{'Event Description Event Description Event'}</article>
        </section>
      </div>
    )
  }
}
