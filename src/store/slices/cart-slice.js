import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    cartItems: [],
    orderedItems: [],
  },
  reducers: {
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
    addToCart(state, action) {
      const id = action.payload.id;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id == id
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id == id
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1;
      } else if (existingCartItem && existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    replaceCart(state, action) {
      state.cartItems = action.payload;
    },
    placeOrder(state, action) {
      const id = action.payload.id;
      const existingOrderIndex = state.orderedItems.findIndex(
        (item) => item.id === id
      );
      const existingOrder = state.orderedItems[existingOrderIndex];
      if (existingOrder) {
        existingOrder.quantity += action.payload.quantity;
      } else {
        state.orderedItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      state.cartItems = [];
    },
    replacePlaceOrder(state, action) {
      state.orderedItems = action.payload;
    },
    updateStatus(state, action) {
      const id = action.payload.id;

      console.log(id);
      const updatedItemIndex = state.orderedItems.findIndex(
        (item) => item.id == id
      );
      state.orderedItems[updatedItemIndex] = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
