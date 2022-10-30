import React from 'react'
import './styles.css'

const GameOver = ( { retry } ) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Recomeçar o jogo</button>
    </div>
  )
}

export default GameOver;