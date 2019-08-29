import React from 'react';

import '../assets/styles/Score.css';

const Score = (props) => (
  <>
    <div className="wrapperScore">
      <h2>{props.player}</h2>
      <div className={`circle${props.color}`} />
      <h3 className="light">Su turno</h3>
    </div>
  </>
);

export default Score;
