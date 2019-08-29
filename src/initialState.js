export const initialState = {
  error: '',
  started: false,
  board: [], // Array 2D
  playerOne: {
    name: '',
    colorDisk: '',
  },
  playerTwo: {
    name: '',
    colorDisk: '',
  },
  posDisksWhite: [
    [3, 3],
    [4, 4],
  ],
  posDisksBlack: [
    [3, 4],
    [4, 3]
  ],
  currentPlayer: 'black', // or white
  winner: '',
  lostTurn: null
};

