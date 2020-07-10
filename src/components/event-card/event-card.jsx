import React from "react";
import "./event-card.css";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MapIcon from "@material-ui/icons/Map";
const EventCard = ({ data: { picture, title, date, time, place, desc } }) => {
  return (
    <div className="ev-card">
      <div
        className="event-img"
        style={{ backgroundImage: `url(${picture})` }}
      ></div>
      <div className="event-description">
        <div>
          <h1 className="evd-title">{title}</h1>
          <br />
          <p className="ev-infos-card">
            <span className="date-info">
              <EventIcon />
              <span className="date-info-content">{date}</span>
            </span>
            <span className="time-info">
              <AccessTimeIcon />
              <span className="time-info-content">{time}</span>
            </span>
            <span className="place-info">
              <MapIcon />
              <span classNameName="place-info-content">{place}</span>
            </span>
          </p>
          <p>{desc}</p>
        </div>
        <a href="" className="l-ev">
          Voir l'évenement
        </a>
      </div>
    </div>
  );
};

export default EventCard;
