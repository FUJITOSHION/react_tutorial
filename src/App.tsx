import React, { useState } from 'react';
import './App.css';

import { Board } from './component/Board';

function App() {
  const [history, setHistory] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const calculateWiner = (history: number []) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i=0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if (history[a] && history[a] === history[b] && history[a] === history[c]) {
        return history[a];
      }
    }
    return null
  }

  const winner = calculateWiner(history);

  let status;

  if (winner){
    status = 'win is ' + winner;
  }
  else{
    status = 'Next player:' + (xIsNext ? 'A':'B')
  }
  const handleClick = (i: number) =>{
    if (calculateWiner(history) || history[i]){
      return
    }
    const nextValue = xIsNext ? "A" : "B"
    setHistory(history.map((value, j) => i === j ? nextValue: value))
    setXIsNext(!xIsNext)
  }
  return (
    <div>
      <div className="status">{status}</div>
      <Board squares={history} onClick={handleClick}/>
    </div>
  );
}

export default App;
