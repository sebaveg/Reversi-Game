import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';

class GameScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Board />
      </>
    );
  }
}

// const mapStateToProps = (state) => state.board;

export default connect(null, null)(GameScreen);
