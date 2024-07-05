import React from "react";
import "./UserHome.css";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import { IconButton } from "@mui/material";
import {
  Cake,
  Fastfood,
  LocalDining,
  LocalPizza,
  Restaurant,
  Spa,
} from "@mui/icons-material";

const UserHome = () => {
  return (
    <div className="userhome">
      {/* <Sidebar title="Catogories" /> */}
      <div className="userhome__sidebar">
        <h3>Categories</h3>
        <div className="userhome__sidebarItems">
          <Cake />
          <Sidebar title="Desserts" />
        </div>
        <div className="userhome__sidebarItems">
          <LocalDining />
          <Sidebar title="Breakfast" />
        </div>
        <div className="userhome__sidebarItems">
          <Restaurant />
          <Sidebar title="Dinner" />
        </div>
        <div className="userhome__sidebarItems">
          <Spa />
          <Sidebar title="Vegetarian" />
        </div>
        <div className="userhome__sidebarItems">
          <Fastfood />
          <Sidebar title="Seafood" />
        </div>
        <div className="userhome__sidebarItems">
          <LocalPizza />
          <Sidebar
            title="Street Food
"
          />
        </div>
      </div>
      <div className="userhome__products">
        {/* add route here to render products and products details here  */}
        <Products />
      </div>
    </div>
  );
};

export default UserHome;
