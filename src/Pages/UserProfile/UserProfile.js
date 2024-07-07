import React, { useRef, useState } from "react";
import "./UserProfile.css";
import apiKey from "../../ApiKey";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const UserProfile = () => {
  const [enteredName, setEnteredName] = useState("");
  const history = useHistory();
  const token = useSelector((state) => state.auth.idToken);

  // console.log(token);
  const photoRef = useRef();
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(enteredName, photoRef.current.value);
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
        console.log("name updated");
        history.push("./home");
      } catch (error) {
        console.log(error);
      }
    }
    updatedName();
  };
  return (
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
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
