import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStarted } from '../actions';

import Board from './Board';
import Players from '../components/Players';

import '../assets/styles/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    props.setStarted(); // dispatch action
  }

  componentDidUpdate() {
    // if (this.props.allowedCells === 0) {
    //   console.log('has ganado');
    // }
  }

  render() {
    const {
      playerOne, playerTwo, error,
    } = this.props;
    return (
      <>
        {error ? <p className="error">{error}</p> : null}
        <div className="flexContainer">
          <div className="flexItem">
            <Players
              name={playerOne.name}
              color={playerOne.colorDisk}
              total={playerOne.totalDisks}
            />
          </div>
          <div className="flexItem">
            <Board />
          </div>
          <div className="flexItem">
            <Players
              name={playerTwo.name}
              color={playerTwo.colorDisk}
              total={playerTwo.totalDisks}
            />
          </div>
        </div>
        <h2 className="title">Movement history</h2>
        <p>asljklsjgkasjglajslgjkasklgjaskljgklajsgklajslgkjasgñasjgklñj</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
  allowedCells: state.allowedCells,
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

const mapDispatchToProps = {
  setStarted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
