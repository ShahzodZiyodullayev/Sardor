import { createSlice } from "@reduxjs/toolkit";

export const carDetailReducer = createSlice({
  name: "carDetail",
  initialState: {},
  reducers: {
    setCarDetail: (state, { _, payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setCarDetail } = carDetailReducer.actions;
export default carDetailReducer.reducer;
