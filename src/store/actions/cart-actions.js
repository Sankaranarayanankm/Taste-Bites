import { cartActions } from "../slices/cart-slice";
import toast from "react-hot-toast";

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
      toast.success("Successfully added Item");
    } catch (error) {
      console.log(error || "Failed to add item to the cart");
      toast.error(error.message || "Failed to add item");
    }
  };
}

// this delete cart is called inside place order
async function deleteCart(updatedEmail) {
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

export function placeOrder(email, obj) {
  const updatedEmail = email.replace(/[@.]/g, "");

  return async (dispatch) => {
    async function orderPlaced() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/orders.json`,
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
      await orderPlaced();
      await deleteCart(updatedEmail);
      toast.success("Successfully Placed Order");
      dispatch(cartActions.placeOrder(obj));
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Failed to place your order");
    }
  };
}

export function getCartData(email) {
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
        dispatch(cartActions.addToCart(data[val]));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOrders() {
  return async (dispatch) => {
    async function ordersPlaced() {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/orders.json`
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
      const out = Object.keys(data).map((key) => ({ ...data[key], id: key }));
      dispatch(cartActions.replacePlaceOrder(out));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateOrders(id, updatedItem) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://taste-bites-5fdad-default-rtdb.firebaseio.com/orders/${id}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedItem),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      console.log(updatedItem);
      toast.success("Successfully updated ");
      dispatch(cartActions.updateStatus(updatedItem));
    } catch (error) {
      toast.error(error.message || "Failed to update");
      console.error("Error updating order:", error);
    }
  };
}
