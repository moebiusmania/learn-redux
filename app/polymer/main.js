'use strict';

import {Polymer} from './polymer.js';
import {createStore} from 'redux';

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

// Bind store to reducer
const store = createStore(counter);

export class CounterRedux {

	get behaviors() {
	    return [];
	}

	beforeRegister(){
		this.is = 'counter-redux';
		this.properties = {
        value: {
          type: Number,
          value: () => { return store.getState() }
        }
		}
	}

  _onIncrement(){
    store.dispatch({
      type: 'INCREMENT'
    })
  }

  _onDecrement(){
    store.dispatch({
      type: 'DECREMENT'
    })
  }

	attached(){

	}

}

Polymer(CounterRedux);
