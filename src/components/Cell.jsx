import React from 'react';

import '../assets/styles/Cell.css';

const Cell = ({ children, disk, allowed }) => {
  return (
    <td className={allowed ? 'highlight' : 'cell'}>
      {disk !== 'black' && disk !== 'white' ? children : null }
      <div className={`${disk}` === 'black' ? 'black' : `${disk}` === 'white' ? 'white' : ''} />
    </td>
  )
};

export default Cell;
