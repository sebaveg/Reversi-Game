import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

import App from './routes/App';

import './index.css';

const initialState = {
  error: '',
  board: {
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    cols: ['1', '2', '3', '4', '5', '6', '7', '8'],
  },
  playerOne: {
    name: '',
    colorDisk: '',
  },
  playerTwo: {
    name: '',
    colorDisk: '',
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
