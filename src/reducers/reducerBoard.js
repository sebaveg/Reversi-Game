import undoable, { groupByActionTypes, excludeAction } from 'redux-undo';
import {
  PUT_DISKS,
  SET_BOARD,
  UPDATE_ALLOWED_CELLS,
} from '../types/index';

import initialState from '../initialStates/stateBoard';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case PUT_DISKS:
      return {
        ...state,
        board: Object.assign([...state.board], {
          [action.payload.x]: Object.assign([...state.board[action.payload.x]], {
            [action.payload.y]: { allowedCell: [], disk: action.payload.disk },
          }),
        }),
      };
    case SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    case UPDATE_ALLOWED_CELLS:
      return {
        ...state,
        board: action.payload,
      };

    default:
      return state;
  }
};

export default undoable(reducers,
  {
    limit: false,
    groupBy: groupByActionTypes(PUT_DISKS),
    filter: excludeAction(UPDATE_ALLOWED_CELLS),
  });
