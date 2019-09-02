import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setError,
  setBoard,
  changeTurn,
  setPosDisksWhite,
  setPosDisksBlack,
  addDisks,
} from '../actions';

import CellLayout from '../components/Cell';

import '../assets/styles/Cell.css';

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

class Cell extends Component {
  diskOponent = () => (this.props.currentPlayer === 'white' ? 'black' : 'white')

  inBoard = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8

  // reverse disks oponent
  async reverse() {
    if (this.props.allowed) {
      const board = this.props.board.slice();
      const x = this.props.position[0];
      const y = this.props.position[1];
      // save position disks in the global state
      if (this.props.currentPlayer === 'black') {
        this.props.setPosDisksBlack([x, y]);
      }
      if (this.props.currentPlayer === 'white') {
        this.props.setPosDisksWhite([x, y]);
      }
      board[x][y].disk = this.props.currentPlayer;
      let X; let Y; let cantDisks;
      let cells;
      // Reverse all disks in one direction
      directions.forEach((direction) => {
        cantDisks = 0;
        X = x;
        Y = y;
        cells = [];
        do {
          X += direction[0];
          Y += direction[1];
          cells.push([X, Y]);
          cantDisks += 1;
        } while (this.inBoard(X, Y) && board[X][Y].disk === this.diskOponent());
        if (cantDisks > 1 && this.inBoard(X, Y) && board[X][Y].disk === this.props.currentPlayer) {
          cells.forEach((cell) => {
            board[cell[0]][cell[1]].disk = this.props.currentPlayer;
          });
          this.props.addDisks(cantDisks);
        }
      });
      await this.props.changeTurn();
      await this.props.setBoard(board);
    } else {
      this.props.setError('No can put your disk here');
      setTimeout(() => {
        this.props.setError('');
      }, 2000);
    }
  }

  render() {
    const { disk, allowed, children } = this.props;
    return (
      <CellLayout
        disk={disk}
        allowed={allowed}
        onClick={this.reverse.bind(this)}
      >
        {children}
      </CellLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  currentPlayer: state.currentPlayer,
});

const mapDispatchToProps = {
  setError,
  setBoard,
  changeTurn,
  setPosDisksWhite,
  setPosDisksBlack,
  addDisks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
