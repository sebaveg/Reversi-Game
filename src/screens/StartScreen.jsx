import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setNamePlayers, setColorPlayers } from '../actions';

import '../assets/styles/StartScreen.css';

// Only this screen use hooks
const StartScreen = (props) => {
  const [players, setPlayers] = useState({
    namePlayerOne: 'Player One',
    namePlayerTwo: 'Player Two',
  });

  // get value between 0 and 1. If value > 0.5 is 50% probability
  const randomColorDisk = () => (Math.random() > 0.5 ? 'white' : 'black');

  // Every change on input update the local state of this component
  const handleInput = (event) => {
    setPlayers({
      ...players,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setNamePlayers(players);
    props.setColorPlayers(randomColorDisk());
    props.history.push('/game');
  };

  return (
    <section className="formWrapper">
      <h5>Enter the name of the players</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Player one</h2>
          <input type="text" name="namePlayerOne" placeholder="Insert name for player one" maxLength="25" onChange={handleInput} />
        </div>
        <div className="form-group">
          <h2>Player two</h2>
          <input type="text" name="namePlayerTwo" placeholder="Insert name for player two" maxLength="25" onChange={handleInput} />
        </div>
        <button type="submit" className="button">Start</button>
      </form>
    </section>
  );
};

const mapDispatchToProps = {
  setNamePlayers,
  setColorPlayers,
};

export default connect(null, mapDispatchToProps)(StartScreen);
