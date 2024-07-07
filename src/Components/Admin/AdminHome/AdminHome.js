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

const AdminHome = () => {
  return (
    <div className="adminHome">
      <div className="adminHome__sidebar">
        <Sidebar category="admin" Icon={AccountBox} />
        <Sidebar category="Categories" Icon={Category} />
        <Sidebar category="Add Recipie" Icon={ControlPoint} />
        <Sidebar category="Orders" Icon={ShoppingCart} />
      </div>
      <div className="adminHome__content">
        <Switch>
          {/* <Route path="/admin">
            <Redirect to="/home/admin" />
          </Route> */}
          <Route exact path="/admin">
            <Catogories />
          </Route>
          <Route path="/admin/addrecipe">
            <AddRecipe />
          </Route>
          <Route path="*">
            <Redirect to="/admin" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AdminHome;
