import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  loggedIn: true,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state, { payload }) => {
      state.isLoading = payload;
    },
    loginUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      // localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("accessToken", JSON.stringify(payload.token));
      axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`;

      const userString = localStorage.getItem("accessToken");
      state.user = userString ? JSON.parse(userString) : null;
    },
    loginUserFailure: (state, { payload }) => {
      state.isLoading = payload;
    },
    loginUserOut: (state) => {
      state.loggedIn = false;

      localStorage.removeItem("accessToken");
      delete axios.defaults.headers.common.Authorization;
    },
    signUserUp: (state, { payload }) => {
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(payload));
      const userString = localStorage.getItem("user");
      state.user = userString ? JSON.parse(userString) : null;
    },
    isUserLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
      !payload && localStorage.removeItem("user");
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  loginUserOut,
  signUserUp,
  isUserLoggedIn,
} = authReducer.actions;

export default authReducer.reducer;
