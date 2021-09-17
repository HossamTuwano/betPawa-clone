import React from "react";
import "../Announcement.css";

function Announcement() {
  return (
    <div className="announcement">
      <div className="announcement__warning">
        Hey Visitor, this is a clone dont be fooled by the looks well if were it
        means alot. I did this for improving my front-end skills
      </div>

      <div className="announcement__ad">
        <img
          className="announcement__image"
          src="https://www.otakukan.com/wp-content/uploads/2019/07/naruto-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Announcement;
