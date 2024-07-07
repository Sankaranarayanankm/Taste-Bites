// add to cart handler
// add place order handler

import { cartActions } from "../slices/cart-slice";

export function addItemToCart(email, obj) {
  const updatedEmail = email.replace(/[@.]/g, "");

  return async (dispatch) => {
    async function addItem() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/usercart${updatedEmail}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
    }
    try {
      await addItem();
      dispatch(cartActions.addToCart(obj));
    } catch (error) {
      console.log(error || "Failed to add item to the cart");
    }
  };
}

export function placeOrder(email, obj) {
  const updatedEmail = email.replace(/[@.]/g, "");

  return async (dispatch) => {
    async function orderPlaced() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/userorder${updatedEmail}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
    }
    async function deleteCart() {
      const res = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/usercart${updatedEmail}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Error in placing order");
      }
    }
    try {
      await orderPlaced();
      await deleteCart();
      dispatch(cartActions.placeOrder(obj));
    } catch (error) {
      console.log(error);
    }
  };
}

//  add an function to fetch data from firebase when the page loads need both cart items and placed orders

export function getCartData(email) {
  // console.log(email)
  const updatedEmail = email.replace(/[@.]/g, "");

  return async (dispatch) => {
    async function getData() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/usercart${updatedEmail}.json`
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      return data;
    }
    try {
      const data = await getData();
      for (let val in data) {
        // console.log(data[val]);
        dispatch(cartActions.addToCart(data[val]));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOrders(email) {
  const updatedEmail = email.replace(/[@.]/g, "");

  return async (dispatch) => {
    async function ordersPlaced() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/userorder${updatedEmail}.json`
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      return data;
    }
    try {
      const data = await ordersPlaced();
      for (let val in data) {
        // console.log(data[val]);
        dispatch(cartActions.replacePlaceOrder(data[val]));
        // its better to add a new state in slice to set the ordered data while loading page
      }
    } catch (error) {
      console.log(error);
    }
  };
}
