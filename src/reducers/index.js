const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME_PLAYERS':
      return {
        ...state,
        namePlayerOne: action.payload.namePlayerOne,
        namePlayerTwo: action.payload.namePlayerTwo,
      };
    case 'SET_COLOR_PLAYERS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
