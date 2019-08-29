export const initialState = {
  error: '',
  board: {
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    cols: ['1', '2', '3', '4', '5', '6', '7', '8']
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
    [3, 3],
    [4, 4],
  ],
  posDisksBlack: [
    [3, 4],
    [4, 3]
  ],
  turn: 'Black',
  winner: '',
  lostTurn: null
};

