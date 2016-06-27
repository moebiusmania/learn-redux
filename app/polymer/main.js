'use strict';

import {Polymer} from './polymer.js';
import {ReduxBehavior} from './store.js';

export class CounterRedux {

	get behaviors() {
	    return [ReduxBehavior];
	}

	beforeRegister(){
		this.is = 'counter-redux';
		this.properties = {
        value: {
          type: Number,
          statePath: 'value'
        }
		}
	}

  _onIncrement(){
    this.dispatch({
      type: 'INCREMENT'
    });
    console.log(this.getState());
  }

  _onDecrement(){
    this.dispatch({
      type: 'DECREMENT'
    });
    console.log(this.getState());
  }

	attached(){
    console.log(this.getState());
	}

}

Polymer(CounterRedux);
