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
    // Remove item from cart by ID
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // Clear all items from cart
    clearCart: (state) => {
      return [];
    },
  },
});

export const { add, remove, clearCart } = CartSlice.actions;
export default CartSlice.reducer;