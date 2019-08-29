import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Score from '../components/Score';

import '../assets/styles/Game.css';

class GameScreen extends Component {
  constructor() {
    super()
  }
  render() {
    const { playerOne, playerTwo, turn } = this.props;
    return (
      <>
        <div className="wrapperResponsive">
          <Score player={playerOne.name} color={playerOne.colorDisk} turn={turn} />
          <Board />
          <Score player={playerTwo.name} color={playerTwo.colorDisk} turn={turn} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
  turn: state.turn,
});

export default connect(mapStateToProps, null)(GameScreen);
