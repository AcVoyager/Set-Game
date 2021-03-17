import React from 'react'
import { useSelector } from 'react-redux';

function Game(props) {

  const difficulty = useSelector(state => state.difficulty);

  return (
    <div className="container-fluid">

      {difficulty}
      
    </div>
  )
}

export default Game;