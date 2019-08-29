import React from 'react';

import Cell from './Cell';

import '../assets/styles/Board.css';

const Board = ({ board = [] }) => (
  <table className="Board">
    <tbody>
      {board.map((row, x) => (
        <tr key={row}>
          {board[x].map((cell, y) => <Cell key={`${x}${y}`} position={[x, y]}>{cell}</Cell>)}
        </tr>
      ))}
    </tbody>
  </table>
)

export default Board;
