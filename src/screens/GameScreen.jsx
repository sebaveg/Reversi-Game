import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStarted, setWinner } from '../actions';

import Players from '../components/Players';
import Board from '../containers/Board';

import '../assets/styles/Game.css';

class GameScreen extends Component {
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
      playerOne, playerTwo, error, historyDisks,
    } = this.props;
    return (
      <>
        {error ? <p className="error">{error}</p> : null}
        <section className="flexContainer">
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
        </section>
        <h2 className="title">Movement history</h2>
        <table cellPadding="5">
          <thead>
            <tr>
              <th>Nª</th>
              <th>Player</th>
              <th>Movement</th>
              <th>Come back action</th>
            </tr>
          </thead>
          <tbody>
            {historyDisks.map((movement, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{i % 2 === 0 ? 'White' : 'Black'}</td>
                <td>{i % 2 === 0 ? 'positionWhite' : 'positionBlack'}</td>
                <td><button type="button">Come back here</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.game.error,
  allowedCells: state.game.allowedCells,
  historyDisks: state.disks.past,
  playerOne: state.players.playerOne,
  playerTwo: state.players.playerTwo,
});

const mapDispatchToProps = {
  setStarted,
  setWinner,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
