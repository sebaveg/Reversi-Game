import React from 'react';

import Cell from '../containers/Cell';

import '../assets/styles/Board.css';

const Board = ({ board = [] }) => (
  <table className="Board">
    <tbody>
      {board.map((row, x) => (
        <tr key={row}>
          {board[x].map((cell, y) => (
            <Cell key={`${cell.id}`} disk={cell.disk} allowed={cell.allowedCell} position={[x, y]}>
              {cell.id}
            </Cell>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Board;
