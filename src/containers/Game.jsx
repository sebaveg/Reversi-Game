import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Players from '../components/Players';

import '../assets/styles/Game.css';

class GameScreen extends Component {
  render() {
    const { playerOne, playerTwo, currentPlayer } = this.props;
    return (
      <>
        <div className="wrapperResponsive">
          <Players player={playerOne.name} color={playerOne.colorDisk} currentPlayer={currentPlayer} />
          <Board />
          <Players player={playerTwo.name} color={playerTwo.colorDisk} currentPlayer={currentPlayer} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
  currentPlayer: state.currentPlayer,
});

export default connect(mapStateToProps, null)(GameScreen);
