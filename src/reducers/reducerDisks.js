import {
  SET_POSITION_DISK_WHITE,
  SET_POSITION_DISK_BLACK,
} from '../types/index';

import initialState from '../initialStates/stateDisks';

const reducers = (state = initialState, action) => {
  switch (action.type) {
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

export default reducers;
