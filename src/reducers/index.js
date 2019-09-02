import {
  SET_NAME_PLAYERS,
  SET_COLOR_PLAYERS,
  SET_BOARD,
  SET_ALLOWED_CELLS,
  STARTED,
  CHANGE_TURN,
  SET_POSITION_DISK_BLACK,
  SET_POSITION_DISK_WHITE,
  ADD_DISKS,
  SET_WINNER,
  SET_ERROR,
} from '../types/index';

const reducer = (state, action) => {
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
    case STARTED:
      return {
        ...state,
        started: true,
      };
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
    case CHANGE_TURN:
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'white' ? 'black' : 'white',
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

    case SET_WINNER:
      return {
        ...state,
        winner: action.payload,
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

export default reducer;
