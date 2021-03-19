import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ACTIONS } from '../redux/actions';
import { STATES } from '../redux/stateConstants'

function Rule(props) {

  const dispatch = useDispatch();
  const lastAppState = useSelector(state => state.lastAppState);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-grow-1 rule-container">
      
      <div className="col-9">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Game Rules</h5>
            <p className="card-text">
              Set (stylized as SET) is a real-time card game designed by Marsha Falco in 1974 and published by Set Enterprises in 1991. The deck consists of 81 unique cards that vary in four features across three possibilities for each kind of feature: number of shapes (one, two, or three), shape (diamond, squiggle, oval), shading (solid, striped, or open), and color (red, green, or purple).[1] Each possible combination of features (e.g. a card with three striped green diamonds) appears as a card precisely once in the deck.
            </p>
            <p className="card-text">
              In the game, certain combinations of three cards are said to make up a set. For each one of the four categories of features — color, number, shape, and shading — the three cards must display that feature as a) either all the same, or b) all different. Put another way: For each feature the three cards must avoid having two cards showing one version of the feature and the remaining card showing a different version.
            </p>
            <p className="card-text">
              For example, 3 solid red diamonds, 2 solid green squiggles, and 1 solid purple oval form a set, because the shadings of the three cards are all the same, while the numbers, the colors, and the shapes among the three cards are all different.
            </p>
            <p className="card-text">
              <small className="text-muted">Reference: Wikipedia</small>
            </p>
            <div className="text-end">
              <button type="button" className="btn btn-outline-primary btn-lg"
                onClick={() => dispatch(ACTIONS.changeState(lastAppState))}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rule;