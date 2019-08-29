import React from 'react';

import '../assets/styles/Players.css';

const Players = (props) => (
  <>
    <div className="wrapperPlayers">
      <h2>{props.player}</h2>
      <div className={`circle${props.color}`} />
      {props.color === props.currentPlayer ? <h3 className="light"> Su turno </h3> : null }
    </div>
  </>
);

export default Players;
