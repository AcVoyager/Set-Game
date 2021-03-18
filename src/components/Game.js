import React from 'react'
import { useSelector } from 'react-redux';

import GameBoard from './GameBoard'

function Game(props) {

  const difficulty = useSelector(state => state.difficulty);
  const onBoardCards = useSelector(state => state.onBoardCards);
  const inDeckCards = useSelector(state => state.inDeckCards);
  const cardDeck = useSelector(state => state.cardDeck)

  const getDiff = (diff) => {
    if(diff == 1) // use == instead of === on purpose here
      return "Easy";
    if(diff == 2)
      return "Medium";
    if(diff == 3)
      return "Hard";
  }

  return (
    <div className="container-fluid d-flex flex-grow-1">

      <div className="row flex-grow-1">
        <div className="col-3 d-flex flex-column justify-content-start align-items-start flex-grow-1">
          
          <div className="mt-5">
            <h4>{"Difficulty: " + getDiff(difficulty)}</h4>
          </div>
          
          <div className="buttons">
            <div className="my-3">
              <button type="button" class="btn btn-primary">Reset</button>
            </div>
            <div className="my-3">
              <button type="button" class="btn btn-success">Draw 3 cards</button>
            </div>
          </div>

          <div className="mb-2" style={{width: '80%'}}>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Visible Cards 
                <span class="badge bg-primary rounded-pill">{onBoardCards.length}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Discarded Cards 
                <span class="badge bg-primary rounded-pill">{cardDeck.length-onBoardCards.length-inDeckCards.length}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Remaining Cards in Deck 
                <span class="badge bg-primary rounded-pill">{inDeckCards.length}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-9">

          <GameBoard />

        </div>

      </div>
      
    </div>
  )
}

export default Game;