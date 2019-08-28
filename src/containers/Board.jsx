import React from 'react';
import { connect } from 'react-redux';

import BoardLayout from '../components/Board';

const Board = ({
 playerOne, playerTwo, rows, cols 
}) => (
    <BoardLayout
      cols={cols}
      rows={rows}
      playerOne={playerOne}
      playerTwo={playerTwo}
    />
  );

const mapStateToProps = (state) => ({
    playerOne: state.playerOne.name,
    playerTwo: state.playerTwo.name,
    rows: state.board.rows,
    cols: state.board.cols,
  });

export default connect(mapStateToProps, null)(Board);
