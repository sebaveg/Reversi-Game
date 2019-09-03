import { combineReducers } from 'redux';
import board from './reducerBoard';
import player from './reducerPlayer';

const reducerApp = combineReducers({
  board,
  player,
});

export default reducerApp;
