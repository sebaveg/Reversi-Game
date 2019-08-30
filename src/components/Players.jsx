import React from 'react';

import '../assets/styles/Players.css';

const Players = (props) => (
  <>
    <div className="wrapperPlayers">
      <h2>{props.player}</h2>
      <div className={`circle${props.color}`} />
      {props.color === props.currentPlayer ? <h3 className="light"> Su turno </h3> : <h3>&nbsp;</h3> }
    </div>
  </>
);

export default Players;
