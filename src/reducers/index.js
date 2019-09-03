import { combineReducers } from 'redux';

import game from './reducerGame';
import board from './reducerBoard';
import players from './reducerPlayers';

const reducerApp = combineReducers({
  game,
  board,
  players,
});

export default reducerApp;
