import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStarted } from '../actions';

import Board from './Board';
import Players from '../components/Players';

import '../assets/styles/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.props.setStarted(); // dispatch action
  }

  render() {
    const {
      playerOne, playerTwo, currentPlayer, error,
    } = this.props;
    return (
      <>
        <p>{error}</p>
        <div className="flexContainer">
          <div className="flexItem">
            <Players player={playerOne.name} color={playerOne.colorDisk} currentPlayer={currentPlayer} />
          </div>
          <div className="flexItem">
            <Board />
          </div>
          <div className="flexItem">
            <Players player={playerTwo.name} color={playerTwo.colorDisk} currentPlayer={currentPlayer} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
  currentPlayer: state.currentPlayer,
});

const mapDispatchToProps = {
  setStarted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
