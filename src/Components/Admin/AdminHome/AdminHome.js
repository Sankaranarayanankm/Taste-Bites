import React from "react";
import "./AdminHome.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  AccountBox,
  Category,
  ControlPoint,
  ShoppingCart,
} from "@mui/icons-material";
import Catogories from "../Categories/Catogories";
import AddRecipe from "../AddRecipie/AddRecipe";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Orders from "../Orders/Orders";
import { useHistory } from "react-router-dom";

const AdminHome = () => {
  const history = useHistory();
  return (
    <div className="adminHome">
      <Header />
      <div className="adminHome__body">
        <div className="adminHome__sidebar">
          <Sidebar admin path="/" category="admin" Icon={AccountBox} />
          <Sidebar admin path="/" category="categories" Icon={Category} />
          <Sidebar
            admin
            path="/addrecipe"
            category="Add Recipie"
            Icon={ControlPoint}
          />
          <Sidebar admin path="/orders" category="orders" Icon={ShoppingCart} />
        </div>
        <div className="adminHome__content">
          <Switch>
            <Route exact path="/admin">
              <Catogories />
            </Route>
            <Route path="/admin/addrecipe">
              <AddRecipe />
            </Route>
            <Route path="/admin/orders">
              <Orders />
            </Route>
            <Route path="*">
              <Redirect to="/admin" />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminHome;
