import React from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './containers/Board'

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Reversi Game
        </p>
      </header>
      <main>
        <Board />
      </main>
      <footer>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
