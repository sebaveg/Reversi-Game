import React from 'react';

import '../assets/styles/Cell.css';

const Cell = ({ children }) => {
  const { id, disk } = children
  return (
    <td className="cell">
      {disk !== 'black' && disk !== 'white' ? id : null }
      <div className={`${disk}` === 'black' ? 'black' : `${disk}` === 'white' ? 'white' : ''} />
    </td>
  )
};

export default Cell;
