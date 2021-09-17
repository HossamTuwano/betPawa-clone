import React from "react";
import "../EventCard.css";

function EventCard(props) {
  return (
    <div className="event-card">
      <div className="time">{props.time}</div>
      <div className="teams">
        <p>{props.team1}</p>
        <p> {props.team2} </p>
      </div>

      <div className="subtitle">
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}

export default EventCard;
