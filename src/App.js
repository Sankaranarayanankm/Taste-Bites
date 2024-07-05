import React from "react";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import useLoadLocalStorage from "./hooks/useLoadLocalStorage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Home from "./Components/Home/Home";
import { useSelector } from "react-redux";
const App = () => {
  // custom hook to check is there any users in local storage
  useLoadLocalStorage();
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log(isLogin);
  return (
    <div className="app">
      {/* move header from here  */}
      {/* <Header /> */}

      <Switch>
        <Route exact path="/">
          {!isLogin && (
            <div className="loginpages">
              <Redirect to="/signup" />
            </div>
          )}
          {isLogin && <Home />}
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {isLogin && (
          <Route path="/userprofile">
            <UserProfile />
          </Route>
        )}
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
          {isLogin && <Redirect to="/home" />}
          {!isLogin && <Redirect to="/signup" />}
        </Route>
      </Switch>
      {/* move footer from here  */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
