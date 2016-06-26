'use strict';

import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

// Reducer function
const counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
      return state;
  }
}

// Counter component
const Counter = ({
    value,
    onIncrement,
    onDecrement
  }) => (
    <div>
      <h2>{value}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>

)

// Bind store to reducer
const store = createStore(counter);

// Render the main component
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={ () =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={ () =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

export default {store};
