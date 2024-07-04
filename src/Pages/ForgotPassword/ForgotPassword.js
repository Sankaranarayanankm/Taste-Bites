import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div className="forgetpassword">
      <form onClick={submitHandler} className="forgetpassword__form">
        <p>Enter your Email here</p>
        <input type="email" value={email} onChange={emailHandler} />
        <button>Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
