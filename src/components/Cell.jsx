import React from 'react';

const Cell = ({
  disk, allowed, children, onClick,
}) => (
  <td className={allowed ? 'highlight' : 'cell'} onClick={onClick}>
    {disk !== 'black' && disk !== 'white' ? children : null}
    <div className={disk} />
  </td>
);

export default Cell;
