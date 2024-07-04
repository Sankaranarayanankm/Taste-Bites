import React from "react";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import useLoadLocalStorage from "./hooks/useLoadLocalStorage";

const App = () => {
  // custom hook to check is there any users in local storage
  useLoadLocalStorage();
  return (
    <div className="app">
      {/* This is app component */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
