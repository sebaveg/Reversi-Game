import React from 'react';

import '../assets/styles/Cell.css';

const Cell = ({ children }) => (
  <td className="cell">
    {children !== 'W' && children !== 'B' ? children : null }
    <div className={`${children}` === 'W' ? 'black' : `${children}` === 'B' ? 'white' : ''} />
  </td>

);

export default Cell;
