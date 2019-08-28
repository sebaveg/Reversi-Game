import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Score from '../components/Score';

class GameScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h2>Component history</h2>
        <div className="wrapperGridResponsive">
          <Score player={props.playerOne} />
          <Board />
          <Score player={props.playerTwo} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  playerOne: state.playerOne.name,
  playerTwo: state.playerTwo.name,
});

export default connect(mapStateToProps, null)(GameScreen);
