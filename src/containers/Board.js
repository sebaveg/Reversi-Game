import React, {Component} from 'react'

import BoardLayout from '../components/Board'

class Board extends Component {
  state = {
    cols: ['1', '2', '3', '4', '5', '6', '7', '8'],
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ]
  }
  render () {
    return (
      <BoardLayout cols={this.state.cols} rows={this.state.rows} />
    )
  }
}

export default Board