import React from "react";
import "../SidebarRow.css";

function SidebarLefttRow({ Icon, name, selected, event }) {
  return (
    <div className={`sidebar__Row ${selected && "selected"}`}>
      <Icon className="sidebar__Row__Icon" />
      {event}
      <div className="sidebar__Row__Name">{name}</div>
    </div>
  );
}

export default SidebarLefttRow;
