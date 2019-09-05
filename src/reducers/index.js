import { combineReducers } from 'redux';

import game from './reducerGame';
import disks from './reducerDisks';
import board from './reducerBoard';
import players from './reducerPlayers';

const reducerApp = combineReducers({
  game,
  disks,
  board,
  players,
});

export default reducerApp;
