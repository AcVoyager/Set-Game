import React from 'react'
import { useDispatch } from 'react-redux';

import { STATES } from "../redux/stateConstants";
import { ACTIONS } from "../redux/actions";

function WelcomePage(props) {

  const dispatch = useDispatch();

  return (
    <div className="bg-dark container-fluid d-flex flex-grow-1 align-items-center justify-content-center">
      <div className="welcome-page">
        
        <div className="mb-5">
          <h1>Welcome to the SET game!</h1>
        </div>
  
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-outline-danger btn-lg mx-5"
            onClick={() => dispatch(ACTIONS.changeState(STATES.GAME))}>
            Play!
          </button>
          
          <button type="button" className="btn btn-outline-info btn-lg mx-5"
            onClick={() => dispatch(ACTIONS.changeState(STATES.RULE))}>
            Rules
          </button>
        </div>
  
      </div>
    </div>
  )
}

export default WelcomePage;