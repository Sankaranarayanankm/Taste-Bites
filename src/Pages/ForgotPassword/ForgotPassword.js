import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import apiKey from "../../ApiKey";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    async function setNewPassword() {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              requestType: "PASSWORD_RESET",
              email,
            }),
          }
        );
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error.message);
        }
        toast.success("Successfull!! Check your email");
      } catch (error) {
        console.log(error);
        toast.error("Sorry Request Failed!... Please check your connection");
      }
    }
    setNewPassword();
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="forgetpassword">
        <form onClick={submitHandler} className="forgetpassword__form">
          <p>Enter your Email here</p>
          <input type="email" value={email} onChange={emailHandler} />
          <button>Reset Password</button>
        </form>
        <Link to="/login">Go to Login Page</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
