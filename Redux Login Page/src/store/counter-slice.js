import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

// OLD_METHOD using REACT_REDUX
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
