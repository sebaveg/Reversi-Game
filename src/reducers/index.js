const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME_PLAYERS':
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
    case 'SET_COLOR_PLAYERS':
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
    case 'STARTED':
      return {
        ...state,
        started: true
      }
    case 'SET_BOARD':
      return {
        ...state,
        board: action.payload
      }
    case 'CHANGE_TURN':
      return {
        ...state,
        currentPlayer: action.payload === 'white' ? 'black' : 'white'
      }
    case 'SET_POSITION_DISK_WHITE':
      return {
        ...state,
        posDiskWhite: state.posDisksWhite.push(action.payload)
      }
    case 'SET_POSITION_DISK_BLACK':
      return {
        ...state,
        posDiskBlack: state.posDisksBlack.push(action.payload)
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
