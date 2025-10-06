import { createSlice } from "@reduxjs/toolkit";

// Cart slice for managing cart state
export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // Add item to cart
    add: (state, action) => {
      state.push(action.payload);
    },
    // Remove item from cart
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;