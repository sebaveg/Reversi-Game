import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Players from '../components/Players';

import '../assets/styles/Game.css';

class GameScreen extends Component {
  render() {
    const { playerOne, playerTwo, turn } = this.props;
    return (
      <>
        <div className="wrapperResponsive">
          <Players player={playerOne.name} color={playerOne.colorDisk} turn={turn} />
          <Board />
          <Players player={playerTwo.name} color={playerTwo.colorDisk} turn={turn} />
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
