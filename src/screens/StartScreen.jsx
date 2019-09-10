import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNamePlayers, setColorPlayers } from '../actions';

import '../assets/styles/StartScreen.css';

// Only this screen use hooks
const StartScreen = (props) => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState({
    namePlayerOne: props.namePlayerOne || '',
    namePlayerTwo: props.namePlayerTwo || '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // validdate names are set
  const validateForm = () => {
    setIsButtonDisabled(!(players.namePlayerOne.length > 0 && players.namePlayerTwo.length > 0));
  };

  useEffect(() => {
    validateForm();
  }, [players]);

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
    dispatch(setNamePlayers(players));
    dispatch(setColorPlayers(randomColorDisk()));
    props.history.push('/game');
  };

  return (
    <section className="formWrapper">
      <h5>Enter the name of the players</h5>
      <form>
        <div className="form-group">
          <h2>Player one</h2>
          <input type="text" name="namePlayerOne" value={players.namePlayerOne} placeholder="Insert name for player one" maxLength="25" onChange={handleInput} />
        </div>
        <div className="form-group">
          <h2>Player two</h2>
          <input type="text" name="namePlayerTwo" value={players.namePlayerTwo} placeholder="Insert name for player two" maxLength="25" onChange={handleInput} />
        </div>
        <button type="submit" disabled={isButtonDisabled} className="button" onClick={handleSubmit}>Start</button>
      </form>
    </section>
  );
};

export default StartScreen;
