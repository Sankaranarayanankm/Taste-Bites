import { adminAction } from "../slices/admin-slice";

export function addCatogory(item) {
  console.log(item);
  return async (dispatch) => {
    dispatch(adminAction.loadingState(true));
    async function sendRequest() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/catogories.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
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
      const newCat = { ...item, id: data.name };
      console.log(newCat);
      dispatch(adminAction.addCategory(newCat));
    } catch (error) {
      console.log(error || "Failed to add Catogory");
    } finally {
      dispatch(adminAction.loadingState(false));
    }
  };
}
// delete catogory functionality

export function deleteCatogory(id) {
  console.log(id);
  return async (dispatch) => {
    async function sendRequest() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/catogories/${id}.json`,
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
      dispatch(adminAction.deleteCatogory(id));
    } catch (error) {
      console.log(error || "Failed to Delete Catogory");
    }
  };
}

// loading the items while page load

export function getData() {
  return async (dispatch) => {
    async function sendRequest() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/catogories.json`
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const resData = await response.json();
      return resData;
    }
    try {
      const data = await sendRequest();
      console.log(data);
      for (let val in data) {
        // console.log(data[val]);
        dispatch(adminAction.addCategory(data[val]));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
