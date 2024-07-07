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

const AdminHome = () => {
  return (
    <div className="adminHome">
      <div className="adminHome__sidebar">
        {/* category, Icon */}
        <Sidebar category="admin" Icon={AccountBox} />
        <Sidebar category="Categories" Icon={Category} />
        <Sidebar category="Add Recipie" Icon={ControlPoint} />
        <Sidebar category="Orders" Icon={ShoppingCart} />
      </div>
      <div className="adminHome__content">
        <Switch>
          <Route path="/home">
            <Catogories />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AdminHome;
