import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    admin: false,
    isLogin: false,
    idToken: "",
  },
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.isLogin = !!action.payload.email;
    },
    logout(state) {
      state.email = "";
      state.isLogin = false;
      state.idToken = "";
    },
    isAdmin(state, action) {
      const adminEmail = "test@gmail.com";
      state.admin = adminEmail === action.payload;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
