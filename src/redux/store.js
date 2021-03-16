import { createStore } from 'redux'
import { ACTION_TYPES } from './actionConstants'
import { APP_STATES } from './stateConstants'

const INITIAL_STATE = {

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