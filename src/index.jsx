import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

import './index.css';

import StartScreen from './containers/StartScreen';

const initialState = {
  namePlayerOne: '',
  namePlayerTwo: '',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <StartScreen />
  </Provider>, document.getElementById('root'),
);
