export const initialState = {
  error: '',
  board: {
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    cols: ['1', '2', '3', '4', '5', '6', '7', '8'],
  },
  playerOne: {
    name: '',
    colorDisk: '',
  },
  playerTwo: {
    name: '',
    colorDisk: '',
  },
  posDisksWhite: [
    [4, 4],
    [5, 5],
  ],
  posDisksBlack: [
    [4, 5],
    [5, 4],
  ],
  turn: 'Black',
  winner: '',
  lostTurn: null
};

