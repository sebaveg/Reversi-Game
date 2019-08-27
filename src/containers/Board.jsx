import React, { Component } from 'react';

import BoardLayout from '../components/Board';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      cols: ['1', '2', '3', '4', '5', '6', '7', '8'],
    };
  }

  render() {
    const { cols, rows } = this.state;
    return (
      <BoardLayout cols={cols} rows={rows} />
    );
  }
}

export default Board;
