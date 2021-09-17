import React from "react";
import Announcement from "./Announcement";
import Events from "./Events";

function Main() {
  return (
    <div className="Main">
      <div className="Main__main-desktop"></div>

      <div className="Main__main-mobile">
        <Announcement />
        <Events />
      </div>
    </div>
  );
}

export default Main;
