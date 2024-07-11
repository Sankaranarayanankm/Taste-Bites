import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import apiKey from "../../ApiKey";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { authActions } from "../../store/slices/auth-slice";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const email = useSelector((state) => state.auth.email);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: state.email,
            password: state.password,
            returnSecureToken: true,
          }),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      const obj = {
        email: data.email,
        idToken: data.idToken,
      };
      localStorage.setItem("user", JSON.stringify(obj));
      toast.success("Login Successful!");

      dispatch(authActions.login(obj));
      history.push("/userprofile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
          Dont have an account?
          <Link className="login__a" to="/signup">
            Login
          </Link>
        </p>
        <p>
          <Link className="login__forgetpassword" to="/forgotpassword">
            Forget Password?
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
