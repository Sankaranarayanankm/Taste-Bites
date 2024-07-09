import React from "react";
import "./UserHome.css";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import { Route, Redirect, Switch } from "react-router-dom";

import ProductDetails from "../ProductDetails/ProductDetails";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const UserHome = () => {
  const categories = useSelector((state) => state.admin.categories);
  return (
    <>
      <Header />
      <div className="userhome">
        <div className="userhome__sidebar">
          <h3>Categories</h3>
          <Sidebar category="All" />

          {categories.map((item) => (
            <Sidebar key={item.id} category={item.category} />
          ))}
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
      <Footer />
    </>
  );
};

export default UserHome;
