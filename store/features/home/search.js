import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: { data: [], categories: null },
  reducers: {
    searchReducer(state, action) {
      const data = action.payload;
      state.data = data;
    },
    updateCategoriesReducer(state, action) {
      const data = action.payload;
      state.categories = data;
    },
  },
});

export const { searchReducer, updateCategoriesReducer } = SearchSlice.actions;

export default SearchSlice.reducer;
