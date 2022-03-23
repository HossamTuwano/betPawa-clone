import React, { Component } from "react";
import "../SidebarRight.css";

class SidebarRight extends Component {
  render() {
    return (
      <div className="booking">
        <div className="registration">Not Logged in - join Now or Log in</div>
        <div className="tags">
          <div className="sport tag">
            <span>Sport</span>
          </div>
          <div className="virtual tag active">
            <span>Virtual</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarRight;
