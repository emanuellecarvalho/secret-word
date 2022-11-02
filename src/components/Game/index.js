import React, { useState, useRef } from 'react'
import './styles.css'

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    // clear the input before user click on 'Jogar' button
    setLetter('');

    // input focus by default
    letterInputRef.current.focus();
  };

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className='wordContainer'>
        {letters.map((letter, i) => 
          guessedLetters.includes(letter) ? (
            <span className='letter' key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
        )}
      </div>
      <div className='letterContainer'>
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type='text'
              name='letter'
              maxLength='1'
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <button>Jogar!</button>
          </label>
        </form>
      </div>
      <div className='wrongLettersContainer'>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={3}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game;