import React from 'react';

// if disk show it else show id cell
const Cell = ({ disk, allowed, children }) => (
  <td
    className={allowed ? 'highlight' : 'cell'}
    onClick={this.handleClick.bind(this)}
    role="lala"
  >
    {disk !== 'black' && disk !== 'white' ? children : null}
    <div className={`${disk}` === 'black' ? 'black' : `${disk}` === 'white' ? 'white' : ''} />
  </td>
);

export default Cell;
