import React from 'react';
import { connect } from 'react-redux';

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

const Board = ({ cols, rows, posWhite, posBlack }) => {
  
  const createBoard = () => {
    const board = cols.slice()
    for (let i = 0; i < 8; i += 1) board[i] = rows.map((row) => ({
      id: row + board[i],
      disk: null // white or black
    }))
    return board
  }

  const initBoard = (board) => {
    posWhite.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'white' // White
    })
    posBlack.forEach((pos) => {
      board[pos[0]][pos[1]].disk = 'black' // Black
    })
    return board
  };

  const initialBoard = initBoard(createBoard())

  return (
    <BoardLayout
      board={initialBoard}
    />
  );
};

const mapStateToProps = (state) => ({
  cols: state.board.cols,
  rows: state.board.rows,
  posWhite: state.posDisksWhite,
  posBlack: state.posDisksBlack
});

export default connect(mapStateToProps, null)(Board);
