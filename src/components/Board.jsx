import React from 'react';

import '../assets/styles/Board.css';

const Board = ({
  playerOne, playerTwo, rows, cols,
}) => {
  const turn = true;
  return (
    (rows && cols)
      ? (
        <div className="grid">
          <div className="col-1">
            <h4>{playerOne}</h4>
            <div className="circleBlack" />
            {turn ? null : <h2 className="turn">Su turno</h2>}
          </div>

          <div className="wrapperBoard">
            <table className="Board">
              <thead>
                <tr>
                  {rows.map((row) => <th key={row}>{row}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row}>
                    {cols.map((col) => (
                      <td key={`${row}${col}`}>{`${row}${col}`}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-1">
            <h4>{playerTwo}</h4>
            <div className="circleWhite" />
            {turn ? <h2 className="turn">Su turno</h2> : null}
          </div>
        </div>
      ) : <h1>Loading...</h1>
  );
};

export default Board;
