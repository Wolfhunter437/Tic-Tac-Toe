import './App.scss'
import React, { useState } from 'react'
import Board from './Components/Board'
import { calculateWinner } from './Winner'

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner ? `Winner is ${winner}` : `Next player: ${nextPlayer}`  

  const handleSquareClick = position => {
    if(squares[position] || winner){
      return;
    }

    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, pos) =>{
        if(position === pos){
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      })
    })

    setIsXNext((currentIsXNext) => !currentIsXNext)
  }

  return (
    <div className='app'>
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App
