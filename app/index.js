'use strict';

import {store} from './react/main.js';
import {CounterRedux} from './polymer/main.js';

// import {createStore} from 'redux';
//
// // Reducer function
// const counter = (state = 0, action) => {
//   switch (action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//         return state - 1;
//     default:
//       return state;
//   }
// }
//
// // bind store to reducer
// const store = createStore(counter);
//
// console.log('Initial state:', store.getState());
//
// store.subscribe(() => {
//   document.body.innerText = store.getState();
// })
//
// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT'});
// })
//
// export default {store};
