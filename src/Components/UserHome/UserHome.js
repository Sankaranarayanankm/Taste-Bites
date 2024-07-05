import React from "react";
import "./UserHome.css";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  Cake,
  Fastfood,
  LocalDining,
  LocalPizza,
  MenuBook,
  Restaurant,
  Spa,
} from "@mui/icons-material";
import ProductDetails from "../ProductDetails/ProductDetails";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";

const UserHome = () => {
  return (
    <div className="userhome">
      <div className="userhome__sidebar">
        <h3>Categories</h3>
        <Sidebar Icon={MenuBook} category="All" />
        <Sidebar Icon={Cake} category="Desserts" />
        <Sidebar Icon={LocalDining} category="Breakfast" />
        <Sidebar Icon={Restaurant} category="Dinner" />
        <Sidebar Icon={Spa} category="Vegetarian" />
        <Sidebar Icon={Fastfood} category="Seafood" />
        <Sidebar Icon={LocalPizza} category="Street Food" />
      </div>

      <div className="userhome__products">
        <Switch>
          <Route exact path="/home/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="/home">
            <Products />
          </Route>

          <Route path="/home/:productId">
            <ProductDetails />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserHome;
