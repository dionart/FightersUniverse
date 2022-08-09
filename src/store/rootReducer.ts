import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app";

export default combineReducers({
  app: appReducer,
});
