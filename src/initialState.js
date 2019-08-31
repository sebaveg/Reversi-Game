export default {
  error: '',
  started: false,
  board: [[ // Array 2D
    {
      id: '',
      disk: null,
      allowedCell: '',
    },
  ]],
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
  currentPlayer: 'black', // or white
  winner: '',
};
