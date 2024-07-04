import apiKey from "../../ApiKey";
import { authActions } from "../slices/auth-slice";

export function signup(email, password) {
  return async (dispatch) => {
    async function sendSignupDetails() {
      const resposne = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );
      if (!resposne.ok) {
        const errData = await resposne.json();
        throw new Error(errData.error.message);
      }
      const resData = await resposne.json();
      return resData;
    }
    try {
      const data = await sendSignupDetails();
      const obj = {
        email: data.email,
        idToken: data.idToken,
      };
      console.log(obj);
      // localStorage.setItem(email, JSON.stringify(obj));
      // dispatch(authActions.login(obj));
      // add dispatch fn here
    } catch (error) {
      console.log(error);
    }
  };
}

export function login(email, password) {
  return async (dispatch) => {
    async function sendLoginDetails() {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const resData = await response.json();
      return resData;
    }
    try {
      const data = await sendLoginDetails();
      const obj = {
        email: data.email,
        idToken: data.idToken,
      };
      // console.log(obj);
      localStorage.setItem("user", JSON.stringify(obj));
      dispatch(authActions.login(data.email, data.idToken));
    } catch (error) {
      console.log(error);
    }
  };
}

