import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import cartSlice from "./slices/cart-slice";
import sidebarSlice from "./slices/sidebar-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    sidebar: sidebarSlice,
  },
});

export default store;
