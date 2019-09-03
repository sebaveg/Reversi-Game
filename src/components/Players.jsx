import React from 'react';
import { connect } from 'react-redux';
import { changeTurn } from '../actions';

import '../assets/styles/Players.css';

const Players = (props) => {
  const handleClick = () => props.changeTurn();

  const {
    name, color, total, currentPlayer,
  } = props;
  return (
    <>
      <div className="wrapperPlayers">
        <h2>{name}</h2>
        <div className={`circle${color}`} />
        <h3>Total Disks</h3>
        <div>{total}</div>
        {/* Turn */}
        {color === currentPlayer
          ? (
            <>
              <h3 className="light"> Your turn </h3>
              <button type="button" onClick={handleClick}>Skip</button>
            </>
          ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentPlayer: state.present.currentPlayer,
});

const mapDispatchTopProps = {
  changeTurn,
};

export default connect(mapStateToProps, mapDispatchTopProps)(Players);
