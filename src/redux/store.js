import { createStore } from 'redux'
import { ACTION_TYPES } from './actionConstants'
import { STATES } from './stateConstants'

const INITIAL_STATE = {
  appState: STATES.WELCOME,
  difficulty: 1,

};

const rootReducer = (state=INITIAL_STATE, action) => {

  let newState = {...state};
  switch (action.type) {
    case ACTION_TYPES.CHANGE_STATE:
      newState.appState = action.payload.nextState;
      break;
    case ACTION_TYPES.SET_DIFF:
      newState.difficulty = action.payload.difficulty;
      break;
    default:
      return state;
  }

  return newState;

}

export default createStore(rootReducer);