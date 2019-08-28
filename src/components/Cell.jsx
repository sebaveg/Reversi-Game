import React from 'react';

import '../assets/styles/Cell.css';

const Cell = ({ children }) => (
  <td className="cell">
    {/* Disk are building with styles css using .black or .white */}
    <div className={`${children}` === '1' ? 'black' : `${children}` === '2' ? 'white' : ''} />
  </td>

);

export default Cell;
