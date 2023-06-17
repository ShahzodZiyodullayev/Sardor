import { createSlice } from "@reduxjs/toolkit";

export const modelsReducer = createSlice({
  name: "models",
  initialState: [],
  reducers: {
    setModels: (state, { _, payload }) => {
      state = payload;
      return state;
    },
  },
});

export const modelsListReducer = createSlice({
  name: "modelsList",
  initialState: [],
  reducers: {
    setModelsList: (state, { _, payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setModels } = modelsReducer.actions;
export const { setModelsList } = modelsListReducer.actions;
export default {
  models: modelsReducer.reducer,
  modelsList: modelsListReducer.reducer,
};
