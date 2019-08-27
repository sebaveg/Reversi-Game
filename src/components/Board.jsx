import React from 'react';

import '../assets/styles/Board.css';

const Board = (props) => {
  const { rows, cols } = props;
  const turn = true;
  return (
    (rows && cols) ?
      (
        <div className='grid'>
          <div className='col-1'>
            <h4>Player one</h4>
            <div className='circleBlack' />
            {turn ? null : <h2 className='turn'>Su turno</h2>}
          </div>
          <div className='wrapperBoard'>
            <table className='Board'>
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
          <div className='col-1'>
            <h4>Player dos</h4>
            <div className='circleWhite' />
            {turn ? <h2 className='turn'>Su turno</h2> : null}
          </div>
        </div>
      ) : <h1>Loading...</h1>
  );
};

export default Board;
