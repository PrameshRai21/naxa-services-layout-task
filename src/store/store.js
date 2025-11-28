import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "../features/serviceSlice.js";

export const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});
