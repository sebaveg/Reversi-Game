import undoable from 'redux-undo';
import {
  RESET,
  SET_POSITION_DISK,
  SET_POSITION_DISK_WHITE,
  SET_POSITION_DISK_BLACK,
} from '../types/index';

import initialState from '../initialStates/stateDisks';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        posDisksWhite: initialState.posDisksWhite,
        posDisksBlack: initialState.posDisksBlack,
      };
    case SET_POSITION_DISK:
      return {
        ...state,
        posDisks: [
          ...state.posDisks,
          {
            pos: action.payload.pos,
            color: action.payload.color,
          },
        ],
      };
    case SET_POSITION_DISK_WHITE:
      return {
        ...state,
        posDisksWhite: [...state.posDisksWhite, action.payload],
      };
    case SET_POSITION_DISK_BLACK:
      return {
        ...state,
        posDisksBlack: [...state.posDisksBlack, action.payload],
      };
    default:
      return state;
  }
};

export default undoable(reducers, { limit: false });
