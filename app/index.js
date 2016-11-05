'use strict';

// import {FBconfig} from './config/firebase';
// firebase.initializeApp(FBconfig);

import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import { createStore } from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);
