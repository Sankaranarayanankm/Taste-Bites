import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    showList: false,
    edittedRecipe: null,
    isLoading: false,
    categories: [],
    recipes: [],
  },
  reducers: {
    showRecipeList(state) {
      state.showList = true;
    },
    hideRecipeList(state) {
      state.showList = false;
    },
    loadingState(state, action) {
      state.isLoading = action.payload;
    },
    addCategory(state, action) {
      const found = false;
      for (let val of state.categories) {
        if (val == action.payload) {
          found = true;
        }
      }
      if (!found) state.categories.push(action.payload);
    },
    setCategory(state, action) {
      state.categories = action.payload;
    },
    deleteCategory(state, action) {
      const id = action.payload;
      state.categories = state.categories.filter((item) => item.id !== id);
    },
    addRecipe(state, action) {
      state.recipes.push(action.payload);
      state.edittedRecipe = null;
    },
    setRecipe(state, action) {
      state.recipes = action.payload;
    },
    deleteRecipe(state, action) {
      const id = action.payload;
      state.recipes = state.recipes.filter((item) => item.id !== id);
    },
    editRecipe(state, action) {
      state.edittedRecipe = action.payload;
    },
  },
});

export const adminAction = adminSlice.actions;

export default adminSlice.reducer;
