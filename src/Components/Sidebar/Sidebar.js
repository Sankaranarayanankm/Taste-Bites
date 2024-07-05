import React from "react";
import "./Sidebar.css";

const Sidebar = ({ title }) => {
  return (
    <div className="sidebar">
      <p>{title}</p>
    </div>
  );
};

export default Sidebar;
