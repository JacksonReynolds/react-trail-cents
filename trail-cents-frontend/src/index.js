import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {root as rootReducer} from './reducers/index.js'
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


const initialState = {
  events: [],
  rewards: []
}

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router>
    <Provider store={store}> 
      <App className="app"/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
