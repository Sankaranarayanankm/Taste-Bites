import React, { useRef, useState } from "react";
import "./UserProfile.css";
import apiKey from "../../ApiKey";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const UserProfile = () => {
  const [enteredName, setEnteredName] = useState("");
  const history = useHistory();
  const token = useSelector((state) => state.auth.idToken);

  const photoRef = useRef();
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    async function updatedName() {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToken: token,
              displayName: enteredName,
              photoUrl: photoRef.current.value,
              returnSecureToken: false,
            }),
          }
        );
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error.message);
        }
        // console.log("name updated");
        toast.success("Name Updated");
        history.push("./home");
      } catch (error) {
        console.log(error);
        toast.error("Failed To update your name");
      }
    }
    updatedName();
  };
  const continueHandler = () => {
    history.push("/home");
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="userprofile">
        <div className="userprofile__section">
          <h1>Update Your Name here</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Update name"
              value={enteredName}
              onChange={nameHandler}
            />
            <br />
            <input type="text" placeholder="Photo URL" ref={photoRef} />
            <br />
            <button type="submit">Update</button>
            <button onClick={continueHandler} type="button">
              Back
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
