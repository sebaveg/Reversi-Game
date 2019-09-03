import undoable from 'redux-undo';
import {
  SET_BOARD,
  PUT_DISKS,
  SET_POSITION_DISK_BLACK,
  SET_POSITION_DISK_WHITE,
} from '../types/index';

import initialState from '../initialStates/stateBoard';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    case PUT_DISKS:
      return {
        ...state,
        board: action.payload,
      };
    case SET_POSITION_DISK_WHITE:
      state.posDisksWhite.push(action.payload);
      return {
        ...state,
      };
    case SET_POSITION_DISK_BLACK:
      state.posDisksBlack.push(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default undoable(reducers, { limit: false });
