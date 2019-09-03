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
    if (this.props.playerOne.totalDisks > this.props.playerTwo.totalDisks) {
      this.props.setWinner(this.props.playerOne);
    }
    if (this.props.playerOne.totalDisks < this.props.playerTwo.totalDisks) {
      this.props.setWinner(this.props.playerTwo);
    }
    if (this.props.playerOne.totalDisks === this.props.playerTwo.totalDisks) {
      this.props.setWinner('Draw');
    }
  }

  render() {
    const {
      playerOne, playerTwo, error, history,
    } = this.props;
    return (
      <>
        {error ? <p className="error">{error}</p> : null}
        <div className="flexContainer">
          <div className="flexItem">
            <Players
              name={playerOne.name}
              color={playerOne.colorDisk}
              total={playerOne.totalDisk}
            />
          </div>
          <div className="flexItem">
            <Board />
          </div>
          <div className="flexItem">
            <Players
              name={playerTwo.name}
              color={playerTwo.colorDisk}
              total={playerOne.totalDisk}
            />
          </div>
        </div>

        <h2 className="title">Movement history</h2>
        <table cellPadding="5">
          <tr>
            <th>Nª</th>
            <th>Player</th>
            <th>Movement</th>
            <th>Come back action</th>
          </tr>
          {history.map((movement, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>playerColor</td>
              <td>Pisición</td>
              <td><button type="button">Come back here</button></td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.game.error,
  history: state.board.past,
  allowedCells: state.board.present.allowedCells,
  playerOne: state.players.present.playerOne,
  playerTwo: state.players.present.playerTwo,
});

const mapDispatchToProps = {
  setStarted,
  setWinner,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
