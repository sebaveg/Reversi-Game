import React from 'react';
import { connect } from 'react-redux';
import { setBoard, setStarted } from '../actions'

import BoardLayout from '../components/Board';

const directions = [
  [0, 1], // right
  [0, -1], // left
  [-1, 0], // up
  [1, 0], // down
  [1, 1], // diagonal - down right
  [-1, 1], // diagonal - up right                        
  [-1, -1], // diagonal - up left
]

const Board = ({ posWhite, posBlack, setBoard }) => {

  const createBoard = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const cols = ['1', '2', '3', '4', '5', '6', '7', '8']
    const board = cols.slice()
    for (let i = 0; i < 8; i += 1) board[i] = rows.map((row) => ({
      id: row + board[i],
      disk: null // white or black
    }))
    return board
  }

  const initialBoard = (board) => {
    posWhite.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'white' // White
    })
    posBlack.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'black' // Black
    })
    return board
  };

  const initBoard = initialBoard(createBoard())  
  setStarted()
  setBoard(initBoard)

  return (
    <BoardLayout
      board={initBoard}
    />
  );
};

const mapStateToProps = (state) => ({
  started: state.started,
  posWhite: state.posDisksWhite,
  posBlack: state.posDisksBlack
});

const mapDispatchToProps = {
  setStarted,
  setBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
