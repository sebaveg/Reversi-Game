import React, { Component } from 'react';
import { ActionCreators } from 'redux-undo';
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

  handleJump() {
    console.log('JUMP');
    console.log(this.pos);
    this.self.props.onJump(this.pos);
  }

  historyMovement() {
    return this.props.historyDisks.posDisks.map((mov, i) => (
      <tr key={`${mov.pos[0]}${mov.pos[1]}`}>
        <td>{i}</td>
        <td><div className={mov.color === 'white' ? 'white' : 'black'} /></td>
        <td>{`${this.cols[mov.pos[1]]}${this.rows[mov.pos[0]]}`}</td>
        <td><button type="button" onClick={this.handleJump.bind({ pos: i, self: this })}>Come back here</button></td>
      </tr>
    ));
  }

  render() {
    const {
      playerOne, playerTwo, error,
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

        <h2 className="title">MOVIMENTS</h2>
        <div className="wrapper-history">
          <table className="table-history" cellPadding="5">
            <thead>
              <tr key="0">
                <th>Nª</th>
                <th>Color Disk</th>
                <th>Position</th>
                <th>Come back</th>
              </tr>
            </thead>
            <tbody>
              {this.historyMovement()}
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
  onJump: (i) => ActionCreators.jumpToPast(i),
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
