import undoable from 'redux-undo';
import {
  SET_BOARD,
  SET_ALLOWED_CELLS,
  SET_POSITION_DISK_BLACK,
  SET_POSITION_DISK_WHITE,
  ADD_DISKS,
  SET_ERROR,
} from '../types/index';

import initialState from '../initialStates/stateBoard';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    case SET_ALLOWED_CELLS:
      return {
        ...state,
        allowedCells: action.payload,
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
    case ADD_DISKS:
      return {
        ...state,
        disksWhite: action.payload.white,
        disksBlack: action.payload.black,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default undoable(reducers, { limit: false });
