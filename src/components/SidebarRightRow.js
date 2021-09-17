import React from "react";
import "../SidebarRow.css";

function SidebarLefttRow({ Icon, name, selected }) {
  return (
    <div className={`sidebar__Row ${selected && "selected"}`}>
      <Icon className="sidebar__Row__Icon" />

      <div className="sidebar__Row__Name">{name}</div>
    </div>
  );
}

export default SidebarLefttRow;
