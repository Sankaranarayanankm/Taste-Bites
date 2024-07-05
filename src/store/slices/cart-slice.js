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
      } else state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    placeOrder(state, action) {
      state.orderedItems = [...state.orderedItems, action.payload];
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
