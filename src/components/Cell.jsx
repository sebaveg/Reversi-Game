import React from 'react';

const Cell = ({
  disk, allowed, children, position, onClick,
}) => (
  <td className={allowed.length > 0 ? 'highlight' : 'cell'} onClick={onClick}>
    {disk !== 'black' && disk !== 'white' ? children : null}
    <div className={disk} />
  </td>
);

export default Cell;
