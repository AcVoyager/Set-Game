import { ACTION_TYPES } from "./actionConstants"

const simple_action = {
  type: "",
  payload: {

  }
}

export const ACTIONS = {

  changeState: (state) => {
    let newAct = {...simple_action}
    newAct.type = ACTION_TYPES.CHANGE_STATE;
    newAct.payload.nextState = state;
    return newAct;
  },

  setDifficulty: (difficulty) => {
    let newAct = {...simple_action};
    newAct.type = ACTION_TYPES.SET_DIFF;
    newAct.payload.difficulty = difficulty;
    return newAct;
  }

};