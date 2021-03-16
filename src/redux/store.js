import { createStore } from 'redux'
import { ACTION_TYPES } from './actionConstants'
import { STATES } from './stateConstants'

const INITIAL_STATE = {
  appState: STATES.WELCOME,

};

const rootReducer = (state=INITIAL_STATE, action) => {

  let newState = {...state};
  switch (action.type) {
    case null:
      break;
    default:
      return state;
  }

  return newState;

}

export default createStore(rootReducer);