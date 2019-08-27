import React from 'react';
import { connect } from 'react-redux';
import { setNamePlayerOne, setNamePlayerTwo } from '../actions';

import '../assets/styles/StartScreen.css';

const StartScreen = () => {
  return (
    <div className="formWrapper">
      <form>
        <div className="form-group">
          <h2>Player one</h2>
          <input type="text" name="playerOne" placeholder="Insert name for player one" />
        </div>
        <div className="form-group">
          <h2>Player two</h2>
          <input type="text" name="playerTwo" placeholder="Insert name for player one" />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setNamePlayerOne,
  setNamePlayerTwo,
};

export default connect(null, mapDispatchToProps)(StartScreen);
