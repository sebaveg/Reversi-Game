import undoable from 'redux-undo';
import {
  SET_NAME_PLAYERS,
  SET_COLOR_PLAYERS,
  ADD_DISKS,
  CHANGE_TURN,
} from '../types/index';

import initialState from '../initialStates/statePlayer';

const players = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_PLAYERS:
      return {
        ...state,
        playerOne: {
          ...state.playerOne,
          name: action.payload.namePlayerOne,
        },
        playerTwo: {
          ...state.playerTwo,
          name: action.payload.namePlayerTwo,
        },
      };
    case SET_COLOR_PLAYERS:
      return {
        ...state,
        playerOne: {
          ...state.playerOne,
          colorDisk: action.payload,
        },
        playerTwo: {
          ...state.playerTwo,
          colorDisk: action.payload === 'white' ? 'black' : 'white', // assign opposite color to player one
        },
      };
    case ADD_DISKS:
      if (state.playerOne.colorDisk === 'white') {
        return {
          ...state,
          playerOne: {
            ...state.playerOne,
            totalDisks: action.payload.white,
          },
          playerTwo: {
            ...state.playerTwo,
            totalDisks: action.payload.black,
          },
        };
      }
      return {
        ...state,
        playerOne: {
          ...state.playerOne,
          totalDisks: action.payload.black,
        },
        playerTwo: {
          ...state.playerTwo,
          totalDisks: action.payload.white,
        },
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

export default undoable(players, { limit: false });
