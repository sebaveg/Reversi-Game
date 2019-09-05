import undoable from 'redux-undo';
import {
  SET_BOARD,
  SET_POSITION_DISK_BLACK,
  SET_POSITION_DISK_WHITE,
  PUT_DISKS,
} from '../types/index';

import initialState from '../initialStates/stateBoard';

// const reducer = (state, action, cell) => {
//   switch (action.type) {
//     case PUT_DISKS:
//       return Object.assign([...state.board], {
//         [cell.X]: Object.assign([...state.board[cell.X]], {
//           [cell.Y]: { allowedCell: [], disk: action.payload.disk },
//         }),
//       });
//     default:
//       return state;
//   }
// };

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    case PUT_DISKS:

      // return {
      //   ...state,
      //   board: action.payload.allowedCells.map((cell) => reducer(state, action, cell))
      // }

      // board[x][y].allowedCell.forEach((cell) => {
      //   this.props.putDisks({ x: cell.X, y: cell.Y, disk: this.props.currentPlayer });
      //   // board[cell.X][cell.Y].disk = this.props.currentPlayer;
      // });

      return {
        ...state,
        board: Object.assign([...state.board], {
          [action.payload.x]: Object.assign([...state.board[action.payload.x]], {
            [action.payload.y]: { allowedCell: [], disk: action.payload.disk },
          }),
        }),
      };
    case SET_POSITION_DISK_WHITE:
      return {
        ...state,
        posDisksWhite: [...state.posDisksWhite, action.payload],
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
