import React from 'react';
import { connect } from 'react-redux';

import BoardLayout from '../components/Board';

const Board = ({ rows, cols }) => {
  const createBoard = () => {
    const board = cols
    for (let i = 0; i < 8; i += 1) board[i] = rows.map((row) => row + board[i])
    return board;
  };

  const initialBoard = (board) => {
    board[3][3] = 'B'; // Black
    board[4][4] = 'B'; // Black
    board[3][4] = 'W'; // White
    board[4][3] = 'W'; // White
  }

  const board = createBoard();
  initialBoard(board)

  return (
    <BoardLayout
      board={board}
    />
  );
};

const mapStateToProps = (state) => ({
  rows: state.board.rows,
  cols: state.board.cols,
});

export default connect(mapStateToProps, null)(Board);
