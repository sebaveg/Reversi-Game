import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeTurn,
  setError,
  setPositionDisk,
  setPosDisksWhite,
  setPosDisksBlack,
  putDisks,
} from '../actions';

import CellLayout from '../components/Cell';

import '../assets/styles/Cell.css';

class Cell extends Component {
  // reverse disks oponent
  reverse() {
    if (this.props.allowed.length > 0) {
      const x = this.props.position[0];
      const y = this.props.position[1];
      this.props.board[x][y].allowedCell.forEach((cell) => {
        this.props.putDisks({ x: cell.X, y: cell.Y, disk: this.props.currentPlayer });
      });
      if (this.props.currentPlayer === 'white') {
        this.props.setPosDisksWhite([x, y]);
        this.props.setPositionDisk({ pos: [x, y], color: 'white' });
      }
      if (this.props.currentPlayer === 'black') {
        this.props.setPosDisksBlack([x, y]);
        this.props.setPositionDisk({ pos: [x, y], color: 'black' });
      }
      this.props.changeTurn();
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
  board: state.board.present.board,
  currentPlayer: state.board.present.currentPlayer,
});

const mapDispatchToProps = {
  changeTurn,
  setError,
  setPositionDisk,
  setPosDisksWhite,
  setPosDisksBlack,
  putDisks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
