import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div className="signup">
      <h1>Signup</h1>
      <form className="signup__form" onSubmit={submitHandler}>
        <div className="signup__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={state.email}
            onChange={changeHandler}
            name="email"
          />
        </div>
        <div className="signup__input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={state.password}
            onChange={changeHandler}
            name="password"
          />
        </div>
        <div className="signup__input">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            value={state.confirm}
            onChange={changeHandler}
            name="confirm"
          />
        </div>

        <button>Signup</button>
      </form>
      <p>
        Already have an account?
        <Link className="signup__a " to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
