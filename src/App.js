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

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word);

    return {word, category};

  };
  // start the game 
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();
    console.log(word, category);
    // create an array of letters

    let wordLetters = word.toLowerCase().split('');
    console.log(wordLetters);

    // fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);


    setGameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = (letter) => {
    const minusculeLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(minusculeLetter) ||
      wrongLetters.includes(minusculeLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (letters.includes(minusculeLetter)) {
      setGessedLetters((actualGessedLetters) => [
        ...actualGessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        minusculeLetter,
      ]);
    }
    console.log('letter', letter);
  };

  console.log(wrongLetters);

  // end game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <Home  startGame={startGame} /> }
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} /> }
    </div>
  );
};

export default App;
