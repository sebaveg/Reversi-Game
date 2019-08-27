const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME_PLAYER_ONE':
      return {
        ...this.state,
        namePlayerOne: action.payload.name,
      };
    case 'SET_NAME_PLAYER_TWO':
      return {
        ...this.state,
        namePlayerTwo: action.payload.name,
      };
    default:
      return state;
  }
};

export default reducer;
