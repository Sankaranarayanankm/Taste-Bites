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
      state.admin = action.payload.email == "test@gmail.com";
    },
    logout(state) {
      state.email = "";
      state.isLogin = false;
      state.idToken = "";
      state.admin = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
