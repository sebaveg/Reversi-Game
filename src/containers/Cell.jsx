import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setError,
  setBoard,
  changeTurn,
  putDisks,
} from '../actions';

import CellLayout from '../components/Cell';

import '../assets/styles/Cell.css';

class Cell extends Component {
  diskOponent = () => (this.props.currentPlayer === 'white' ? 'black' : 'white')

  inBoard = (x, y) => (x >= 0) && (x < 8) && (y >= 0) && (y < 8)

  // reverse disks oponent
  async reverse() {
    if (this.props.allowed.length > 0) {
      const { board } = this.props;
      const x = this.props.position[0];
      const y = this.props.position[1];
      // await this.props.putDisks({
      //   x, y, disk: this.props.currentPlayer, allowedCells: this.props.board[x][y].allowedCell,
      // });
      // board[x][y].disk = this.props.currentPlayer;
      board[x][y].allowedCell.forEach((cell) => {
        this.props.putDisks({ x: cell.X, y: cell.Y, disk: this.props.currentPlayer });
      });
      // this.props.setBoard(board);
      await this.props.changeTurn();
    } else {
      this.props.setError('No can put your disk here');
      setTimeout(() => {
        this.props.setError('');
      }, 2000);
    }
  }

  render() {
    return (
      <CellLayout
        disk={this.props.disk}
        allowed={this.props.allowed}
        onClick={this.reverse.bind(this)}
      >
        {this.props.children}
      </CellLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board.present.board,
  currentPlayer: state.players.present.currentPlayer,
});

const mapDispatchToProps = {
  setError,
  setBoard,
  changeTurn,
  putDisks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
