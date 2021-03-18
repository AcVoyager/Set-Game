import React from 'react'
import { useSelector } from 'react-redux';

import GameBoard from './GameBoard';
import StatusBar from './StatusBar';

const getDiff = (diff) => {
  if(diff == 1) // use == instead of === on purpose here
    return "Easy";
  if(diff == 2)
    return "Medium";
  if(diff == 3)
    return "Hard";
}

function Game(props) {

  const difficulty = useSelector(state => state.difficulty);
  const onBoardCards = useSelector(state => state.onBoardCards);
  const inDeckCards = useSelector(state => state.inDeckCards);
  const cardDeck = useSelector(state => state.cardDeck);
  const selected_cards = useSelector(state => state.selected_cards);

  return (
    <div className="container-fluid d-flex flex-grow-1">

      <div className="row flex-grow-1">
        <div className="col-3 d-flex flex-column justify-content-start align-items-start flex-grow-1"> 
          <div className="mt-3">
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

          <div className="" style={{width: '80%'}}>
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
        
          {/* <div className="mt-2 card-selection-track" style={{width: '100%'}}>
            {selected_cards.map((cindex, index) => {
              return (
                <div class="card mx-2 my-3">
                  <div class="card-header">
                    {`Card Selection ${index+1}`}
                  </div>
                  <img className="track-img" src={`/imgs/${onBoardCards[cindex].cid}.png`} class="card-img-top" alt="set card"></img>
                </div>
              );
            })}
          </div> */}
        </div>

        <div className="col-9 d-flex flex-column">

          <StatusBar />

          <GameBoard />

        </div>

      </div>
      
    </div>
  )
}

export default Game;