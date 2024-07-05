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

const App = () => {
  // custom hook to check is there any users in local storage
  useLoadLocalStorage();
  return (
    <div className="app">
      {/* move header from here  */}
      <Header />

      <Switch>
        <Route exact path="/">
          <div className="loginpages">
            <Redirect to="/signup" />
          </div>
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
        <Route path="/signup">
          <div className="loginpages">
            <Signup />
          </div>
        </Route>
        <Route path="/login">
          <div className="loginpages">
            <Login />
          </div>
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
      </Switch>
      {/* move footer from here  */}
      <Footer />
    </div>
  );
};

export default App;
