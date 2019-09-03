import { combineReducers } from 'redux';
import board from './board';
import player from './player';

const reducerApp = combineReducers({
  board,
  player,
});

export default reducerApp;
