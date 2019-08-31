import React from 'react';
import { connect } from 'react-redux';
import { setBoard, setStarted } from '../actions'

import BoardLayout from '../components/Board';

const directions = [
  [0, 1], // right
  [0, -1], // left
  [-1, 0], // up
  [1, 0], // down
  [1, 1], // down right
  [1, -1], // down left
  [-1, 1], // up right                        
  [-1, -1] // up left
]

class Board extends React.Component {
  
  componentDidMount() {
    this.initialBoard() // dispatch action
  }
  
  componentDidUpdate() {
    this.allowedCells() // dispatch action
  }
  
  render() {
    return (
      <BoardLayout
        board={this.props.board}
      />
    );
  }

  createBoard() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const cols = ['1', '2', '3', '4', '5', '6', '7', '8']
    const board = cols.slice()
    for (let i = 0; i < 8; i += 1) board[i] = rows.map((row) => ({
      id: row + board[i],
      disk: null, // white or black
      allowedCell: false // says if enable or disable click for put disk
    }))
    return board
  }

  async initialBoard() {
    // Set initial disks: two white and two black in center
    console.log('initialBoard')
    let board = this.createBoard()
    this.props.posWhite.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'white' // White
    })
    this.props.posBlack.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'black' // Black
    })
    await this.props.setBoard(board)
    board = this.allowedCells()
    this.props.setBoard(board)
  };

  allowedCells() {
    // says what cells are enable for clicks
    let board = this.props.board.slice()
    console.log(board)
    for (let x = 0; x < 8; x++){
      for (let y = 0; y < 8; y++){
        board[x][y].allowedCell = this.canPutDisk(x,y)
      }
    }
    return board
  }
  
  canPutDisk(x, y) {
    // boolean if can put one disk in the cell in (x,y)
    const board = this.props.board.slice()
    let can = false
    if (board[x][y].disk) return false;
    let X, Y, cantDisks
    directions.forEach(direction => {
      cantDisks = 0
      X = x
      Y = y
      do {
        X = X + direction[0]
        Y = Y + direction[1]
        cantDisks++
      } while (this.inBoard(X, Y) && board[X][Y].disk === this.diskOponent())
      
      if (cantDisks>1 && this.inBoard(X,Y) && board[X][Y].disk === this.props.currentPlayer) {
        can = true
      }
    })
    return can
  }

  diskOponent = () => this.props.currentPlayer === 'white' ? 'black' : 'white'
  inBoard = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8

};

const mapStateToProps = (state) => ({
  board: state.board,
  started: state.started,
  currentPlayer: state.currentPlayer,
  posWhite: state.posDisksWhite,
  posBlack: state.posDisksBlack
});

const mapDispatchToProps = {
  setStarted,
  setBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
