import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    isLogin: false,
    idToken: "",
  },
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.isLogin = !!action.payload.idToken;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
