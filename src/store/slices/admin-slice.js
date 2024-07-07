import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    catogories: [],
  },
  reducers: {
    addCategory(state, action) {
      state.catogories.push(action.payload);
    },
    deleteCatogory(state, action) {
      const id = action.payload;
      state.catogories = state.catogories.filter((item) => item.id !== id);
    },
    loadingState(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const adminAction = adminSlice.actions;

export default adminSlice.reducer;
