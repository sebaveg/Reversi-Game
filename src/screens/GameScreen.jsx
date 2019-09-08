import React, { Component } from 'react';
// import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import { setStarted, setWinner } from '../actions';

import Players from '../components/Players';
import Board from '../containers/Board';

import '../assets/styles/Game.css';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.cols = ['1', '2', '3', '4', '5', '6', '7', '8'];
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
      this.props.setWinner(this.props.playerOne.name);
    }
    if (this.props.playerOne.totalDisks < this.props.playerTwo.totalDisks) {
      this.props.setWinner(this.props.playerTwo.name);
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

        <div className="wrapper-history">

          <table cellPadding="5">
            {/* <h2 className="title">WHITE history</h2> */}
            <thead>
              <tr key="0">
                <th>Nª</th>
                <th>Movement</th>
                <th>Come back</th>
              </tr>
            </thead>
            <tbody>
              {historyDisks.posDisksWhite.map((mov, i) => (
                <tr key={`${mov[0]}${mov[1]}`}>
                  <td>{i}</td>
                  <td>{`${this.cols[mov[1]]}${this.rows[mov[0]]}`}</td>
                  <td><button type="button">Come back here</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <table cellPadding="5">
            {/* <h2 className="title">BLACK history</h2> */}
            <thead>
              <tr key="0">
                <th>Nª</th>
                <th>Movement</th>
                <th>Come back</th>
              </tr>
            </thead>
            <tbody>
              {historyDisks.posDisksBlack.map((mov, i) => (
                <tr key={`${mov[0]}${mov[1]}`}>
                  <td>{i}</td>
                  <td>{`${this.cols[mov[1]]}${this.rows[mov[0]]}`}</td>
                  <td><button type="button">Come back here</button></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.game.error,
  allowedCells: state.game.allowedCells,
  historyDisks: state.disks.present,
  playerOne: state.players.playerOne,
  playerTwo: state.players.playerTwo,
});

const mapDispatchToProps = {
  setStarted,
  setWinner,
  // onJump: () => UndoActionCreators.jump(),
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
