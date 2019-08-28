import React from 'react';

import '../assets/styles/Score.css';

const Score = (props) => (
  <>
    <div className="wrapperScore">
      <h2>{props.player}</h2>
      <div className={`circle${props.color}`} />
    </div>
  </>
);

export default Score;
