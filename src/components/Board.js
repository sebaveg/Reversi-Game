import React from 'react'

import '../assets/styles/Board.css'

const Board = (props) => {
  return (
    <table className="Board">
      <tbody>
        {props.rows.map((row) => (
          <tr key={row}>
            {props.cols.map((col) => (
              <td key={`${row}${col}`}>{`${row}${col}`}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Board