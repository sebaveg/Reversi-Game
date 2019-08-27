const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME_PLAYERS':
      return {
        ...state,
        namePlayerOne: action.payload.namePlayerOne,
        namePlayerTwo: action.payload.namePlayerTwo,
      };
    default:
      return state;
  }
};

export default reducer;
