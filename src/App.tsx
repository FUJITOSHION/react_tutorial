import React, { useState } from 'react';
import './App.css';

import { Board } from './component/Board';

function App() {
  const [history, setHistory] = useState(Array(9).fill(null))
  return (
    <div>
      {history}
      <Board />
    </div>
  );
}

export default App;
