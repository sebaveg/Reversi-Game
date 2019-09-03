export default {

  error: '',
  started: false,
  board: [], // Array 2D
  allowedCells: 4,
  playerOne: {
    name: '',
    colorDisk: '',
  },
  playerTwo: {
    name: '',
    colorDisk: '',
  },
  posDisksWhite: [ // Position (x,y) of white disks
    [3, 3],
    [4, 4],
  ],
  posDisksBlack: [ // Position (x,y) of black disks
    [3, 4],
    [4, 3],
  ],
  disksWhite: 2,
  disksBlack: 2,
  currentPlayer: 'black', // or white
  winner: '',

};
