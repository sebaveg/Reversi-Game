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
              <tr>
                <th>Nª</th>
                <th>Movement</th>
                <th>Come back</th>
              </tr>
            </thead>
            <tbody>
              {historyDisks.posDisksWhite.map((mov, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{`[x: ${mov[0]}, y: ${mov[1]}]`}</td>
                  <td><button type="button">Come back here</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <table cellPadding="5">
            {/* <h2 className="title">BLACK history</h2> */}
            <thead>
              <tr>
                <th>Nª</th>
                <th>Movement</th>
                <th>Come back</th>
              </tr>
            </thead>
            <tbody>
              {historyDisks.posDisksBlack.map((mov, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{`[x: ${mov[0]}, y: ${mov[1]}]`}</td>
                  {/* <td><button type="button" onClick={this.onJump(i)}>Come back here</button></td> */}
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
  historyDisks: state.disks,
  playerOne: state.players.playerOne,
  playerTwo: state.players.playerTwo,
});

const mapDispatchToProps = {
  setStarted,
  setWinner,
  // onJump: () => UndoActionCreators.jump(),
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
