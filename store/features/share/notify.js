import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: { data: [] },
  reducers: {
    addNotify(state, action) {
      let id = Math.floor(Math.random() * 100000);
      let data = { ...{ id: id }, ...action.payload };
      state.data.push(data);
    },
    deleteNotify(state, action) {
      const idNotify = action.payload.id;
      let listNotify = state.data;
      let newState = listNotify.filter((notification) => {
        return notification.id != idNotify;
      });
      state.data = newState;
    },
  },
});

export const { addNotify, deleteNotify } = notifySlice.actions;

export default notifySlice.reducer;
