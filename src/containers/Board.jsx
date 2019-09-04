import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import { setBoard, setAllowedCells, addDisksPlayers } from '../actions';

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

  async componentDidUpdate(prevProps) {
    if (this.props.currentPlayer !== prevProps.currentPlayer) {
      const newBoard = this.allowedCellsAndCountDisks(this.props.board);
      await this.props.setBoard(newBoard); // dispatch action
    }
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
    const newBoard = this.allowedCellsAndCountDisks(board);
    await this.props.setBoard(newBoard); // dispatch action
  }

  // says what cells are enable for clicks in current turn
  allowedCellsAndCountDisks(board) {
    const b = board.slice();
    let arrayCanReverse;
    let cantAllow = 0; let disksWhite = 0; let disksBlack = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        // array with positions enable for put disks)
        arrayCanReverse = this.canPutDisk(board, x, y);
        b[x][y].allowedCell = arrayCanReverse;
        if (arrayCanReverse.length > 0) cantAllow += 1;
        // count disks
        if (b[x][y].disk === 'white') disksWhite += 1;
        if (b[x][y].disk === 'black') disksBlack += 1;
      }
    }
    this.props.setAllowedCells(cantAllow); // dispatch how many cells enable
    this.props.addDisksPlayers({
      white: disksWhite, black: disksBlack,
    }); // dispatch how many disks for player
    return b;
  }

  // array with positions enable for put disks
  canPutDisk(board, x, y) {
    const b = board.slice();
    if (b[x][y].disk) return [];
    const canReverse = [];
    let X;
    let Y;
    let cantDisks;
    let cells;
    directions.forEach((direction) => {
      cantDisks = 0;
      cells = [];
      X = x;
      Y = y;
      do {
        cells.push({ X, Y });
        X += direction[0];
        Y += direction[1];
        cantDisks += 1;
      } while (this.inBoard(X, Y) && b[X][Y].disk === this.diskOponent());

      if (cantDisks > 1 && this.inBoard(X, Y) && b[X][Y].disk === this.props.currentPlayer) {
        canReverse.push(cells);
        // cells.forEach((cell) => {
        //   board[cell[0]][cell[1]].disk = this.props.currentPlayer;
        // });
      }
    });
    return [].concat(...canReverse);
  }

  render() {
    return (
      <>
        <BoardLayout board={this.props.board} />
        <button type="button" onClick={this.props.onUndo} disabled={!this.props.canUndo}>
          Undo
        </button>
        <button type="button" onClick={this.props.onRedo} disabled={!this.props.canRedo}>
          Redo
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board.present.board,
  posDiskWhite: state.board.present.posDisksWhite,
  posDiskBlack: state.board.present.posDisksBlack,
  currentPlayer: state.players.present.currentPlayer,
  // Redux uno/redo
  canUndo: state.board.past.length > 1,
  canRedo: state.board.future.length > 0,
});

const mapDispatchToProps = {
  setBoard,
  setAllowedCells,
  addDisksPlayers,
  onUndo: () => UndoActionCreators.undo(),
  onRedo: () => UndoActionCreators.redo(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
