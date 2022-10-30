import './App.css';
// react
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from './data/words';

// components
import Home from './components/Home';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
 // const [gameStage, setGameStage] = useState(stages[0].name);
  console.log(words);

  return (
    <div className="App">
      {gameStage === 'start' && <Home /> }
      {gameStage === 'game' && <Game /> }
      {gameStage === 'end' && <GameOver /> }
    </div>
  );
}

export default App;
