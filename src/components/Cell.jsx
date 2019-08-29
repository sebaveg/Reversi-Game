import React, { Component } from 'react';

import '../assets/styles/Cell.css';

class Cell extends Component {
  render() {
    const { disk, allowed, children } = this.props
    return (
      <td className={allowed ? 'highlight' : 'cell'} onClick={this.handleClick.bind(this)}>
        {disk !== 'black' && disk !== 'white' ? children : null}
        <div className={`${disk}` === 'black' ? 'black' : `${disk}` === 'white' ? 'white' : ''} />
      </td>
    )
  }

  handleClick() {
    console.log('Has hecho click en:', this.props.position)
  }

}

export default Cell;
