import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

// Creating Redux store
export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});