import apiKey from "../../ApiKey";
import { authActions } from "../slices/auth-slice";
import toast from "react-hot-toast";

export function signup(email, password) {
  return async (dispatch) => {
    async function sendSignupDetails() {
      const response = await fetch(
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
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const resData = await response.json();
      return resData;
    }
    try {
      const data = await sendSignupDetails();
      const obj = {
        email: data.email,
        idToken: data.idToken,
      };
      toast.success("Successfully Created Account!");
      console.log(obj);
    } catch (error) {
      toast.error(error.message || "Failed to Created Account!");

      console.log(error);
    }
  };
}

// export function login(email, password, history) {
//   return async (dispatch) => {
//     async function sendLoginDetails() {
//       const response = await fetch(
//         `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email,
//             password,
//             returnSecureToken: true,
//           }),
//         }
//       );
//       if (!response.ok) {
//         const errData = await response.json();
//         throw new Error(errData.error.message);
//       }
//       const resData = await response.json();
//       return resData;
//     }
//     try {
//       const data = await sendLoginDetails();
//       const obj = {
//         email: data.email,
//         idToken: data.idToken,
//       };
//       // console.log(obj);
//       localStorage.setItem("user", JSON.stringify(obj));
//       toast.success("Login Successful!");

//       dispatch(authActions.login(data.email, data.idToken));
//       dispatch(authActions.isAdmin(data.email));
//       history.push("/userprofile");
//     } catch (error) {
//       toast.error(error.message || "Failed to login");
//       console.log(error);
//     }
//   };
// }

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch(authActions.logout());
  };
}
