import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { STATES } from "../redux/stateConstants";
import { ACTIONS } from "../redux/actions";

function WelcomePage(props) {

  const dispatch = useDispatch();

  return (
    <div className="bg-dark container-fluid d-flex flex-grow-1 align-items-center justify-content-center">
      <div>
        
        <div className="mb-5 welcome-banner">
          <h1>Welcome to the SET game!</h1>
        </div>
  
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-outline-danger btn-lg mx-5"
            data-bs-toggle="modal" data-bs-target="#diff-modal"
            // onClick={() => dispatch(ACTIONS.changeState(STATES.GAME))}
            >
            Play!
          </button>

          <div className="modal fade" id="diff-modal" tabIndex="-1" aria-labelledby="diff-selection" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="diff-selection">Select difficulty level</h5>
                </div>
                <div className="modal-body">
                  <select className="form-select" aria-label="select difficulties" 
                    onChange={(event) => dispatch(ACTIONS.setDifficulty(event.target.value))}>
                    <option value="1" selected>Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                    onClick={() => dispatch(ACTIONS.changeState(STATES.GAME))}>
                    Go!
                  </button>
                </div>
              </div>
            </div>
          </div>
          
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