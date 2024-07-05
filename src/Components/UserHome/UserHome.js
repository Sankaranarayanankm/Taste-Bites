import React from "react";
import "./UserHome.css";
import Sidebar from "../Sidebar/Sidebar";

const UserHome = () => {
  return (
    <div className="userhome">
      {/* <Sidebar title="Catogories" /> */}
      <h3>Categories</h3>
      <Sidebar title="Desserts" />
      <Sidebar title="Breakfast" />
      <Sidebar title="Dinner" />
      <Sidebar title="Vegetarian" />
      <Sidebar title="Seafood" />
      <Sidebar
        title="Street Food
"
      />
    </div>
  );
};

export default UserHome;
