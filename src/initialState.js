export default {
  error: '',
  started: false,
  board: [], // Array 2D
  playerOne: {
    name: '',
    colorDisk: '',
    totalDisks: 2,
  },
  playerTwo: {
    name: '',
    colorDisk: '',
    totalDisks: 2,
  },
  posDisksWhite: [ // Position (x,y) of white disks
    [3, 3],
    [4, 4],
  ],
  posDisksBlack: [ // Position (x,y) of black disks
    [3, 4],
    [4, 3],
  ],
  currentPlayer: 'black', // or white
  winner: '',
};
