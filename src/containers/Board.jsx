import React from 'react';
import { connect } from 'react-redux';

import BoardLayout from '../components/Board';

const Board = ({ rows, cols }) => (
  <BoardLayout
    cols={cols}
    rows={rows}
  />
);

const mapStateToProps = (state) => ({
  rows: state.board.rows,
  cols: state.board.cols,
});

export default connect(mapStateToProps, null)(Board);
