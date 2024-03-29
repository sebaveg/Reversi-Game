import undoable, {
  groupByActionTypes, excludeAction, includeAction, combineFilters,
} from 'redux-undo';

import {
  CHANGE_TURN,
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
    case CHANGE_TURN:
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'white' ? 'black' : 'white',
      };
    default:
      return state;
  }
};

export default undoable(reducers,
  {
    limit: false,
    groupBy: groupByActionTypes(PUT_DISKS),
    filter: combineFilters(excludeAction(UPDATE_ALLOWED_CELLS), includeAction(SET_BOARD)),
    ignoreInitialState: false,
  });
