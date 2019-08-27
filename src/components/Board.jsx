import React from 'react';

import '../assets/styles/Board.css';

const Board = (props) => {
  const { rows, cols } = props;
  return (
    rows && cols
      ? (
        <table className="Board">
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
      )
      : <h1>Loading...</h1>
  );
};

export default Board;
