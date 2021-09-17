import React from "react";
import EventCard from "./EventCard";
import PageHeadLIne from "./PageHeadLIne";

function Events(props) {
  const date = new Date();
  const currentTime = date.toLocaleTimeString().toString();

  const currentMonth = `${date.getDate()}/0${date.getMonth() + 1}`;
  return (
    <div className="events">
      <PageHeadLIne />
      <EventCard
        team1="Chelsea"
        team2="Manchester United"
        subtitle="Football / England Premeire League"
        time={currentTime}
      />
    </div>
  );
}

export default Events;
