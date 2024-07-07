import React, { useEffect } from "react";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import useLoadLocalStorage from "./hooks/useLoadLocalStorage";
import UserProfile from "./Pages/UserProfile/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Components/Cart/Cart";
import { getCartData, getOrders } from "./store/actions/cart-actions";
import AdminHome from "./Components/Admin/AdminHome/AdminHome";
import UserHome from "./Components/UserHome/UserHome";

// need to remove Home.js after completing the project
const App = () => {
  // custom hook to check is there any users in local storage
  useLoadLocalStorage();
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData(email));
    dispatch(getOrders(email));
  }, [email]);

  const isLogin = useSelector((state) => state.auth.isLogin);
  const showCart = useSelector((state) => state.cart.showCart);
  const admin = email == "test@gmail.com";
  return (
    <div className="app">
      {showCart && <Cart />}
      <Switch>
        <Route exact path="/">
          {!isLogin && (
            <div className="loginpages">
              <Redirect to="/signup" />
            </div>
          )}
          {isLogin && admin && <Redirect to="/admin" />}
          {isLogin && !admin && <Redirect to="home" />}
        </Route>
        {isLogin && !admin && (
          <Route path="/home">
            <UserHome />
          </Route>
        )}
        isLogin && admin &&{" "}
        <Route path="/admin">
          <AdminHome />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
        {!isLogin && (
          <Route path="/signup">
            <div className="loginpages">
              <Signup />
            </div>
          </Route>
        )}
        {!isLogin && (
          <Route path="/login">
            <div className="loginpages">
              <Login />
            </div>
          </Route>
        )}
        {!isLogin && (
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
        )}
        <Route path="*">
          {isLogin && !admin && <Redirect to="/home" />}
          {isLogin && admin && <Redirect to="/admin" />}
          {!isLogin && <Redirect to="/signup" />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
