import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./authSlice";

const reducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({ reducer });
