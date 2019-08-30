import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTurn } from '../actions'

import '../assets/styles/Players.css';

class Players extends Component {

  handleClick = () => this.props.changeTurn()
  render() {
    return <>
      <div className="wrapperPlayers">
        <h2>{this.props.player}</h2>
        <div className={`circle${this.props.color}`} />
        {this.props.color === this.props.currentPlayer ?
          <>
            <h3 className="light"> Su turno </h3>
            <button type="button" onClick={this.handleClick}>Skip turn</button>
          </>: <h3>&nbsp;</h3>
        }
      </div>
    </>
  }
}

const mapDispatchTopProps = {
  changeTurn
}

export default connect(null, mapDispatchTopProps)(Players);
