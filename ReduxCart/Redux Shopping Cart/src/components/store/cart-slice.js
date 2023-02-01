import { createSlice } from "@reduxjs/toolkit";

const initialCartCounterState = { counter: 0, showCounter: false };

const cartCounterSlice = createSlice({
  name: "cartCounter",
  initialState: initialCartCounterState,
  reducers: {
    Increment: (state) => {
      state.counter++;
    },
    Decrement: (state) => {
      state.counter--;
    },
    Toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = cartCounterSlice.actions;
export default cartCounterSlice;

