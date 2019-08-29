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
        start: true
      }
    case 'SET_BOARD':
      return {
        ...state,
        board: action.payload
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
