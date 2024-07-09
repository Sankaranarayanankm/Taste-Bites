import { adminAction } from "../slices/admin-slice";
import toast from "react-hot-toast";

export function addRecipe(data) {
  return async (dispatch) => {
    async function sendRequest() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/recipes.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }

      const res = await response.json();
      return res;
    }
    try {
      const res = await sendRequest();
      toast.success("Successfully added recipe");
      const obj = { ...data, id: res.name };
      console.log(obj);
      dispatch(adminAction.addRecipe(obj));
    } catch (error) {
      toast.error(error.message || "Failed to add recipe");
      console.log(error || "Failed to add Recipe");
    }
  };
}

// get recipe on load
export function getRecipe() {
  return async (dispatch) => {
    async function sendRequest() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/recipes.json`
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      return data;
    }
    try {
      const data = await sendRequest();
      // console.log(typeof data);
      let list = [];
      for (let val in data) {
        list.push({ ...data[val], id: val });
      }
      // console.log(list);
      dispatch(adminAction.setRecipe(list));
    } catch (error) {
      console.log(error);
    }
  };
}

// delete recipe handler

export function deleteRecipe(id) {
  return async (dispatch) => {
    async function sendRequest() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/recipes/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
    }
    try {
      await sendRequest();
      dispatch(adminAction.deleteRecipe(id));
    } catch (error) {
      console.log(error);
    }
  };
}
