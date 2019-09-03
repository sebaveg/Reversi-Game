import {
  SET_NAME_PLAYERS,
  SET_COLOR_PLAYERS,
  STARTED,
  CHANGE_TURN,
  SET_WINNER,
} from '../types/index';


const reducers = (state, action) => {
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
    case CHANGE_TURN:
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'white' ? 'black' : 'white',
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
