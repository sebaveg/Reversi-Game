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

  async handleClick() {
    if (this.props.allowed) {
      let board = this.props.board.slice();
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
      board = this.reverse(x, y);
      await this.props.changeTurn();
      await this.props.setBoard(board);
    } else {
      this.props.setError('No can put your disk here');
      setTimeout(() => {
        this.props.setError('');
      }, 2000);
    }
  }

  reverse(x, y) {
    // reverse disks oponent
    const board = this.props.board.slice();
    let X; let Y; let cantDisks;
    let cells;
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
    return board;
  }

  render() {
    const { disk, allowed, children } = this.props;
    return (
      // if disk show it else show id cell
      <td
        className={allowed ? 'highlight' : 'cell'}
        onClick={this.handleClick.bind(this)}
        role="lala"
      >
        {disk !== 'black' && disk !== 'white' ? children : null}
        <div className={`${disk}` === 'black' ? 'black' : `${disk}` === 'white' ? 'white' : ''} />
      </td>
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
