import { createSlice } from "@reduxjs/toolkit";

const userString = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  loggedIn: true,
  user: userString ? JSON.parse(userString) : null,
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
      localStorage.setItem("user", JSON.stringify(payload));
      const userString = localStorage.getItem("user");
      state.user = userString ? JSON.parse(userString) : null;
    },
    loginUserFailure: (state, { payload }) => {
      state.isLoading = payload;
    },
    loginUserOut: (state) => {
      state.loggedIn = false;
      localStorage.removeItem("user");
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
