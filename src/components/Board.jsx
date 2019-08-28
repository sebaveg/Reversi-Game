import React from 'react';

import '../assets/styles/Board.css';

const Board = ({ rows, cols }) => (
  (rows && cols)
    ? (
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
    ) : <h1>Loading...</h1>
);

export default Board;
