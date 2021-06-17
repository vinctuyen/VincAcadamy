import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { data: {} },
  reducers: {
    loginReducer(state, action) {
      const data = action.payload;
      state.data = data;
    },
  },
});

export const { loginReducer } = loginSlice.actions;

export default loginSlice.reducer;
