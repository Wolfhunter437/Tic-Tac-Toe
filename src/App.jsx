import './App.scss'
import React, { useState } from 'react'
import Board from './Components/Board'
import StatusMessage from './Components/StatusMessage'
import History from './Components/History'
import { calculateWinner } from './Winner'

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }]

function App() {

  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const {winner, winningSquares} = calculateWinner(gamingBoard.squares);

  const handleSquareClick = position => {
    if (gamingBoard.squares[position] || winner) {
      return;
    }

    setHistory((currentHistory) => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      const lastGamingState = isTraversing ? currentHistory[currentMove] : currentHistory[currentHistory.length - 1]

      const nextSquaresState = lastGamingState.squares.map((squareValue, pos) => {
        if (position === pos) {
          return lastGamingState.isXNext ? 'X' : 'O';
        }
        return squareValue;
      })

      const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1) : currentHistory;
      return base.concat({ squares: nextSquaresState, isXNext: !lastGamingState.isXNext })
    })
    setCurrentMove(move => move + 1)
  }

  const moveTo = move => {
    setCurrentMove(move);
  }

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <div className='app'>
      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} winningSquares={winningSquares} handleSquareClick={handleSquareClick} />
      <button type='button' className={`btn-reset ${winner ? 'active' : ''}`} onClick={onNewGameStart}>Start New Game</button>
      <h3 style={{ fontWeight: 'normal' }}>Game History</h3>
      <History  history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  )
}

export default App
