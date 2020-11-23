import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index.js'
import App from './App';

const initialState = {
  events: [],
  rewards: []
}

const store = createStore(rootReducer, initialState, compose(applyMiddleWare(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
