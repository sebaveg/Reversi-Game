import React from 'react';
import { connect } from 'react-redux';
import { setBoard, setAllowedCells } from '../actions';

import BoardLayout from '../components/Board';

const directions = [
  [0, 1], // right
  [0, -1], // left
  [-1, 0], // up
  [1, 0], // down
  [1, 1], // down right
  [1, -1], // down left
  [-1, 1], // up right
  [-1, -1], // up left
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.cols = ['1', '2', '3', '4', '5', '6', '7', '8'];
  }

  componentDidMount() {
    this.initialBoard();
  }

  diskOponent = () => (this.props.currentPlayer === 'white' ? 'black' : 'white');

  inBoard = (x, y) => ((x >= 0) && (x < 8) && (y >= 0) && (y < 8));

  createBoard() {
    const board = this.rows.slice();
    for (let i = 0; i < 8; i += 1) {
      board[i] = this.cols.map((row) => ({
        id: row + board[i],
        disk: null, // white or black
        allowedCell: false, // says if enable or disable click for put disk
      }));
    }
    return board;
  }

  async initialBoard() {
    // Set initial disks: two white and two black in center
    const board = this.createBoard();
    this.props.posDiskWhite.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'white'; // White
    });
    this.props.posDiskBlack.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'black'; // Black
    });
    await this.props.setBoard(board); // dispatch action
    this.allowedCells();
  }

  allowedCells() {
    // says what cells are enable for clicks
    const b = this.props.board.slice();
    let bool; let cant = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        bool = true; // this.canPutDisk(x, y);
        b[x][y].allowedCell = bool;
        b[x][y].lala = 'pepe';
        if (bool) cant += 1;
      }
    }
    return cant;
    // await this.props.setBoard(board);
    // this.props.setAllowedCells(cant);
  }

  canPutDisk(x, y) {
    // boolean if can put one disk in the cell in (x,y)
    const { board } = this.props;
    let can = false;
    if (board[x][y].disk) return false;
    let X;
    let Y;
    let cantDisks;
    directions.forEach((direction) => {
      cantDisks = 0;
      X = x;
      Y = y;
      do {
        X += direction[0];
        Y += direction[1];
        cantDisks += 1;
      } while (this.inBoard(X, Y) && board[X][Y].disk === this.diskOponent());

      if (cantDisks > 1 && this.inBoard(X, Y) && board[X][Y].disk === this.props.currentPlayer) {
        can = true;
      }
    });
    return can;
  }

  render() {
    return (
      <BoardLayout board={this.props.board} />
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  currentPlayer: state.currentPlayer,
  posDiskWhite: state.posDisksWhite,
  posDiskBlack: state.posDisksBlack,
});

const mapDispatchToProps = {
  setBoard,
  setAllowedCells,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
