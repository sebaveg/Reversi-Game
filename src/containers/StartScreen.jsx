import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setNamePlayers, setColorPlayers } from '../actions';

import '../assets/styles/StartScreen.css';

const StartScreen = (props) => {
  const [players, setPlayers] = useState({
    namePlayerOne: 'Player one',
    namePlayerTwo: 'Player two',
  });

  const randomColorDisk = () => {
    // get value between 0 and 1. If value > 0.5 is 50% probability
    const colorDisk = Math.random() > 0.5 ? 'white' : 'black';
    return colorDisk;
  };

  // Every change on input update the state
  const handleInput = (event) => {
    setPlayers({
      ...players,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setColorPlayers(randomColorDisk());
    props.setNamePlayers(players);
    props.history.push('/game');
  };

  return (
    <section className="formWrapper">
      <h4>Enter the name of the players</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Player one</h2>
          <input type="text" name="namePlayerOne" placeholder="Insert name for player one" maxLength="25" onChange={handleInput} />
        </div>
        <div className="form-group">
          <h2>Player two</h2>
          <input type="text" name="namePlayerTwo" placeholder="Insert name for player one" maxLength="25" onChange={handleInput} />
        </div>
        <button type="submit" className="button">
          Start Game
        </button>
      </form>
    </section>
  );
};

const mapDispatchToProps = {
  setNamePlayers,
  setColorPlayers,
};

export default connect(null, mapDispatchToProps)(StartScreen);
