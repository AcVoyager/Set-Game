import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/actions';
import { STATES } from '../redux/stateConstants';

import GameBoard from './GameBoard';
import StatusBar from './StatusBar';
import { findSet } from '../redux/store'

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
  const dispatch = useDispatch();

  const [ifHint, setIfHint] = useState(false);

  return (
    <div className="container-fluid d-flex flex-grow-1">

      <div className="row flex-grow-1">
        <div className="col-md-3 d-flex flex-column justify-content-start align-items-start flex-grow-1"> 
          <div className="mt-3">
            <h4>{"Difficulty: " + getDiff(difficulty)}</h4>
          </div>
          
          <div className="buttons">
            <div className="my-3">
              <button type="button" class="btn btn-primary" onClick={() => dispatch(ACTIONS.changeState(STATES.GAME))}>Reset</button>
            </div>
            <div className="my-3">
              <button type="button" class="btn btn-success" onClick={() => dispatch(ACTIONS.drawCards())} disabled={inDeckCards.length < 3}>Draw 3 cards</button>
            </div>
            <div className="my-3"> 
              <button type="button" class="btn btn-warning" onClick={() => setIfHint(!ifHint)}>Hint</button>
              {ifHint?
                <p className="mt-2 ms-1">{findSet(onBoardCards.map(value => value.cid)) ? 
                    "There is at least one set on board" : "No set on board"}</p> : null
              }
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
        
        </div>

        <div className="col-md-9 d-flex flex-column">

          <StatusBar />

          <GameBoard />

        </div>

      </div>
      
    </div>
  )
}

export default Game;