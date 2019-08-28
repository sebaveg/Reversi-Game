import React from 'react';

import '../assets/styles/Cell.css';

const Cell = ({ children }) => (
  <td className="cell">
    <div className={`${children}` === '1' ? 'black' : `${children}` === '2' ? 'white' : ''} />
  </td>

);

export default Cell;
