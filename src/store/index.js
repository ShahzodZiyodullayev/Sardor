import { configureStore } from "@reduxjs/toolkit";
import models from "../reducers/models";
import carDetail from "../reducers/carDetail";
// import userReducer from "../reducers/userReducer";
// import booksReducer from "../reducers/booksReducer";
// import snackbarReducer from "../reducers/snackbarReducer";
export default configureStore({
  reducer: {
    auth: "userReducer",
    books: "booksReducer",
    snackbar: "snackbarReducer",
    user: "user",
    models: models.models,
    modelsList: models.modelsList,
    carDetail,
  },
  devTools: process.env.NODE_ENV !== "production",
});
