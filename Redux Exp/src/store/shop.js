import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
  let counterState = state.counter;
  
  switch (action.type) {
    case 'INCREMENT':
      return { counter: counterState + 1, showCounter: state.showCounter };
    case 'DECREMENT':
      return { counter: counterState - 1, showCounter: state.showCounter };
    case 'TOGGLE':
      return { counter: counterState, showCounter: !state.showCounter };
    case 'RESET':
      return { counter: counterState = initialState.counter , showCounter: state.showCounter };
    case 'INCREASE':
      return {
        counter : counterState + parseInt(action.amount),
        showCounter: state.showCounter,
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);
export default store;
