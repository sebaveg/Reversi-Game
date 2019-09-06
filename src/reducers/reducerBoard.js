import undoable, { groupByActionTypes, includeAction } from 'redux-undo';
import {
  SET_BOARD,
  PUT_DISKS,
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
        board: Object.assign([...state.board], {
          [action.payload.x]: Object.assign([...state.board[action.payload.x]], {
            [action.payload.y]: { allowedCell: [], disk: action.payload.disk },
          }),
        }),
      };

    default:
      return state;
  }
};

export default undoable(reducers,
  { limit: false, groupBy: groupByActionTypes(PUT_DISKS), filter: includeAction(SET_BOARD) });
