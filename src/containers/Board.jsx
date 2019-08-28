import React from 'react';
import { connect } from 'react-redux';

import BoardLayout from '../components/Board';

const Board = ({ rows, cols }) => {
  const createBoard = () => {
    const virtualBoard = new Array(8).fill(0);
    for (let i = 0; i < 8; i++) virtualBoard[i] = new Array(8).fill(0);
    virtualBoard[3][3] = 1;
    virtualBoard[4][4] = 1;
    virtualBoard[3][4] = 2;
    virtualBoard[4][3] = 2;
    return virtualBoard;
  };

  const virtualBoard = createBoard();

  return (
    <BoardLayout
      cols={cols}
      rows={rows}
      board={virtualBoard}
    />
  );
};

const mapStateToProps = (state) => ({
  rows: state.board.rows,
  cols: state.board.cols,
});

export default connect(mapStateToProps, null)(Board);
