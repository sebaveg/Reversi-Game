import React from 'react';

import Board from './containers/Board';

function App() {
  return (
    <div className='App'>
      <header>
        <p>
          Reversi Game
        </p>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
