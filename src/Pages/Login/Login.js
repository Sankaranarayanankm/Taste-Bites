import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
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
    <div className="login">
      <h1>Login</h1>
      <form className="login__form" onSubmit={submitHandler}>
        <div className="login__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={state.email}
            name="email"
            onChange={changeHandler}
          />
        </div>

        <div className="login__input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={state.password}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <button>Login</button>
      </form>
      <p>
        Dont have an account?<Link className='login__a' to="/signup">Login</Link>
      </p>
    </div>
  );
};

export default Login;
