import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  setError,
  setBoard,
  changeTurn,
  setPosDisksWhite,
  setPosDisksBlack
} from '../actions'

import '../assets/styles/Cell.css';

class Cell extends Component {
  render() {
    const { disk, allowed, children } = this.props
    return (
      <td className={allowed ? 'highlight' : 'cell'} onClick={this.handleClick.bind(this)}>
        {disk !== 'black' && disk !== 'white' ? children : null}
        <div className={`${disk}` === 'black' ? 'black' : `${disk}` === 'white' ? 'white' : ''} />
      </td>
    )
  }

  handleClick() {
    if (this.props.allowed) {
      const x = this.props.position[0]
      const y = this.props.position[1]
      const board = this.props.board.slice()
      const {currentPlayer} = this.props
      board[x][y].disk = this.props.currentPlayer
      board[x][y].allowedCell = false
      currentPlayer === 'white' ? this.props.setPosDisksWhite([x,y]) : this.props.setPosDisksBlack([x,y])
      this.props.setBoard(board)
      this.props.changeTurn(this.props.currentPlayer)
    }
    else {
      this.props.setError('No can put your disk here')      
    }
  }

}

const mapStateToProps = (state) => ({
  board: state.board,
  currentPlayer: state.currentPlayer
})

const mapDispatchToProps = {
  setError,
  setBoard,
  changeTurn,
  setPosDisksWhite,
  setPosDisksBlack
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
