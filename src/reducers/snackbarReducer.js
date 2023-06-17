import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    title: "",
    color: "",
    isRefresh: false,
  },
  reducers: {
    setSnack: (state, action) => {
      const { title, color } = action.payload;
      state.title = title;
      state.color = color;
      state.isRefresh = !state.isRefresh;
    },
  },
});

export const { setSnack } = snackbarSlice.actions;
export default snackbarSlice.reducer;
