import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNamePlayers } from '../actions';

import '../assets/styles/StartScreen.css';

const StartScreen = (props) => {
  const [namePlayers, setValues] = useState({
    namePlayerOne: '',
    namePlayerTwo: '',
  });

  const handleInput = (event) => {
    setValues({
      ...namePlayers,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setNamePlayers(namePlayers);
  };

  return (
    <section className='formWrapper'>
      <h4>Ingrese el nombre de los jugadores</h4>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <h2>Player one</h2>
          <input type='text' name='namePlayerOne' placeholder='Insert name for player one' onChange={handleInput} />
        </div>
        <div className='form-group'>
          <h2>Player two</h2>
          <input type='text' name='namePlayerTwo' placeholder='Insert name for player one' onChange={handleInput} />
        </div>
        <button type='submit' className='button'>
          <Link to='/gaming'>Start Game</Link>
        </button>
      </form>
    </section>
  );
};

const mapDispatchToProps = {
  setNamePlayers,
};

export default connect(null, mapDispatchToProps)(StartScreen);
