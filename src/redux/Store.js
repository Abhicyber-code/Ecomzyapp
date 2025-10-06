import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

// Creating Redux store with cart slice
export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});