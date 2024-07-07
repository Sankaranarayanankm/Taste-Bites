import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    selectedCategory: "All",
    
  },
  reducers: {
    changeSelection(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
