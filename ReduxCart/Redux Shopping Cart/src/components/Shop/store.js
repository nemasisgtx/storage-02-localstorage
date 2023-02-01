import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: { cartCounter: cartCounterSlice.reducer },
});
export const counterActions = cartCounterSlice.actions;
export default store;
