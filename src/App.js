import React from 'react';
import './App.css';
import Board from './Board';

const App = () => {
  return (
    <div className="game">
      <h1 className="game-heading">Tic-Tac-Toe</h1>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default App;
