import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reset } from '../actions';

import '../assets/styles/EndScreen.css';

class EndScreen extends Component {
  render() {
    return (
      <main className="main">
        <h3>Winner is:</h3>
        <h1>{this.props.winner}</h1>
        <Link to="/">
          <button className="button" type="button" onClick={this.props.reset}>Play again!</button>
        </Link>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  winner: state.game.winner,
});

const mapDispatchToProps = {
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);
