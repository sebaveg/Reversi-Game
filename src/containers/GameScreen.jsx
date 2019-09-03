import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStarted, setWinner } from '../actions';

import Board from './Board';
import Players from '../components/Players';

import '../assets/styles/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    props.setStarted(); // dispatch action
  }

  componentDidUpdate() {
    if (this.props.allowedCells === 0) {
      this.winner();
      this.props.history.push('/end');
    }
  }

  winner() {
    // This can do better
    if (this.props.disksWhite > this.props.disksBlack) {
      this.props.setWinner(this.props.playerOne.colorDisk === 'white' ? this.props.playerOne.name : this.props.playerTwo.name);
    }
    if (this.props.disksWhite < this.props.disksBlack) {
      this.props.setWinner(this.props.playerOne.colorDisk === 'black' ? this.props.playerOne.name : this.props.playerTwo.name);
    }
    if (this.props.disksWhite === this.props.disksBlack) {
      this.props.setWinner('Draw');
    }
  }

  render() {
    const {
      disksWhite, disksBlack, playerOne, playerTwo, error,
    } = this.props;
    return (
      <>
        {error ? <p className="error">{error}</p> : null}
        <div className="flexContainer">
          <div className="flexItem">
            <Players
              name={playerOne.name}
              color={playerOne.colorDisk}
              total={playerOne.colorDisk === 'black' ? disksBlack : disksWhite}
            />
          </div>
          <div className="flexItem">
            <Board />
          </div>
          <div className="flexItem">
            <Players
              name={playerTwo.name}
              color={playerTwo.colorDisk}
              total={playerOne.colorDisk === 'white' ? disksWhite : disksBlack}
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
  error: state.present.error,
  allowedCells: state.present.allowedCells,
  playerOne: state.present.playerOne,
  playerTwo: state.present.playerTwo,
  disksWhite: state.present.disksWhite,
  disksBlack: state.present.disksBlack,
});

const mapDispatchToProps = {
  setStarted,
  setWinner,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
