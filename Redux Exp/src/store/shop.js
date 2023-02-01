import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
// let counterState = state.counter;
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
    Reset: (state) => {
      state.counter = initialCounterState.counter;
    },
    Increase: (state, action) => {
      state.counter = state.counter + parseInt(action.payload);
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   let counterState = state.counter;
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: counterState + 1, showCounter: state.showCounter };
//     case "DECREMENT":
//       return { counter: counterState - 1, showCounter: state.showCounter };
//     case "TOGGLE":
//       return { counter: counterState, showCounter: !state.showCounter };
//     case "RESET":
//       return {
//         counter: (counterState = initialState.counter),
//         showCounter: state.showCounter,
//       };
//     case "INCREASE":
//       return {
//         counter: counterState + parseInt(action.amount),
//         showCounter: state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
