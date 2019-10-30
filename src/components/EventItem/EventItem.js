import React from "react";
import TokenService from "../../services/token-service";
import SearchContext from "../../contexts/SearchContext";
import { Link } from "react-router-dom";
import "./EventItem.css";

export default class EventItem extends React.Component {
  static contextType = SearchContext;

  renderFavButton = () => {
    if (!TokenService.hasAuthToken()) {
      //if not logged in, render a "login to save favorites" button that links to the login page
      return (
        <div className="EventItem__goLogin">
          <Link className="button_login" to="/signIn">
            Login to Save Favorites
          </Link>
        </div>
      );
    }
    const inFavorites = this.context.savedEvents.find(
      savedEvent => savedEvent.fetch_id === this.props.fetch_id
    );
    if (inFavorites) {
      //if logged in and favorite already exists in context, render "remove from favorites" button
      return (
        <div className="EventItem__unfavorite">
          <button
            className="EventItem__unfavoritebtn"
            onClick={() => this.context.removeEvent(inFavorites.id)}
          ></button>
        </div>
      );
    }
    //otherwise, render "add to favorites" button
    return (
      <div className="EventItem__favorite">
        <button
          className="button"
          onClick={() => this.context.saveEvent(this.props)}
        ></button>
      </div>
    );
  };

  render() {
    const { name, url, description, venue, address, start_time } = this.props;
    let eventTime = new Date(start_time);
    eventTime = eventTime.toLocaleTimeString();

    return (
      <div className="EventItem__Container">
        <div className="EventItem">
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <div className="EventItems">
            <h3 className="EventItem__header">{name}</h3>
            {/* <p>
          <img src={imgsrc} alt="thumbnail"/>
        </p> */}
            <h4 className="EventItem__time">
              {venue}, {eventTime}
            </h4>
            <h5 className="EventItem__address">{address}</h5>
            <div className="EventItem__description">
              <p>{description}</p>
            </div>

            <div className="EventItem__learnMore">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>

            <br></br>
            {this.renderFavButton()}
            {/* <div className='EventItem__favorite'>
  
        <button className='button'  onClick={() => props.saveEvent(props)} ></button>
  
          
        </div> */}
          </div>
        </div>
      </div>
    );
  }
}
//<button onClick={() => props.saveEvent(props)}><i className="fa fa-heart" aria-hidden="true"></i></button>

//      <button className='EventItem__button' onClick={() => props.saveEvent(props)}>Add to favorite<i className="fa fa-heart" aria-hidden="true"></i></button>
