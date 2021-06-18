import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {data: false},
  reducers: {
    setLoadingReducer(state, action) {
      const data = action.payload;
      state.data = data;
    },
  },
});

export const { setLoadingReducer } = loadingSlice.actions;

export default loadingSlice.reducer;
