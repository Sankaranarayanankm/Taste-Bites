import React from "react";
import "./UserHome.css";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import { Route, Redirect } from "react-router-dom";
import {
  Cake,
  Fastfood,
  LocalDining,
  LocalPizza,
  Restaurant,
  Spa,
} from "@mui/icons-material";
import ProductDetails from "../ProductDetails/ProductDetails";

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
        <Route exact path="/home">
          <Products />
        </Route>
        <Route path="/home/:productId">
          <ProductDetails />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </div>
    </div>
  );
};

export default UserHome;
