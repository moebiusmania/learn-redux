import {createStore} from 'redux';

// Reducer function
const counter = (state = { value: 0}, action) => {
  switch (action.type){
    case 'INCREMENT':
      return Object.assign({}, state, {value: state.value + 1});
    case 'DECREMENT':
      return Object.assign({}, state, {value: state.value - 1});
    default:
      return state;
  }
}

// Bind store to reducer
const store = createStore(counter);

export var ReduxBehavior = new PolymerRedux(store);
