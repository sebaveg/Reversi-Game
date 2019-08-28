import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Score from '../components/Score';

import '../assets/styles/Game.css';

class GameScreen extends Component {
  render() {
    return (
      <>
        <div className="wrapperResponsive">
          <Score player={this.props.playerOne.name} color={this.props.playerOne.colorDisk} />
          <Board />
          <Score player={this.props.playerTwo.name} color={this.props.playerTwo.colorDisk} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

export default connect(mapStateToProps, null)(GameScreen);
