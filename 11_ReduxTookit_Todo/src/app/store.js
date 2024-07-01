import { configureStore } from "@reduxjs/toolkit";
// NOTE: Here, configureStore comes from 'core-redux'
//      NOT from 'react-redux'

import todoReducer from "../feature/todo/todoSlice";

// creating and exporting the store
export const store = configureStore({
  reducer: todoReducer,
});
