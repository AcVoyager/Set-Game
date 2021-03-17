import { createStore } from 'redux'
import { ACTION_TYPES } from './actionConstants'
import { STATES } from './stateConstants'

const INITIAL_STATE = {
  appState: STATES.WELCOME,
  difficulty: 1,

  cardDeck: [],
  onBoardCards: [], // [{cid: 1, border: none}, {}...]
  inDeckCards: [],
  shownCardNum: 0,
  selected_cards: [], // [cindex,]
};

const checkIfSet = (c1, c2, c3) => {
  //  TODO
  return true;
}

const rootReducer = (state=INITIAL_STATE, action) => {

  let newState = {...state};
  switch (action.type) {
    case ACTION_TYPES.CHANGE_STATE:
      newState.appState = action.payload.nextState;
      break;
    case ACTION_TYPES.SET_DIFF:
      newState.difficulty = action.payload.difficulty;
      break;
    case ACTION_TYPES.INITIALIZATION:
      newState.cardDeck = action.payload.cardDeck;
      newState.shownCardNum = action.payload.shownCardNum;
      newState.onBoardCards = newState.cardDeck.slice(0, newState.shownCardNum).map(
        (value) => ({cid: value, border: null})
      );
      newState.inDeckCards = newState.cardDeck.slice(newState.shownCardNum);
      break;
    case ACTION_TYPES.CLICK_CARD:
      const cindex = action.payload.cindex;
      const cid = action.payload.cid;
      const selected_cards = newState.selected_cards.slice();
      const onBoardCards = newState.onBoardCards.slice();

      const idx = selected_cards.indexOf(cindex);

      // unselect
      if(idx !== -1){
        selected_cards.splice(idx, 1);
        onBoardCards[cindex].border = null;
        selected_cards.map((value) => {
          onBoardCards[value].border = STATES.BORDER_SELECTED;
        });
      }
      //select
      else {
        if(selected_cards.length < 2){
          selected_cards.push(cindex);
          selected_cards.map((value) => {
            onBoardCards[value].border = STATES.BORDER_SELECTED;
          });
          // onBoardCards[cindex].border = STATES.BORDER_SELECTED;
        }
        else if(selected_cards.length === 2) {
          selected_cards.push(cindex);
          const border = checkIfSet(selected_cards[0], selected_cards[1], selected_cards[2]) ? STATES.BORDER_SET : STATES.BORDER_NOTSET;
          selected_cards.map((value) => {
            onBoardCards[value].border = border;
          });
        }
        
      }
      console.log(selected_cards);
      newState.selected_cards = selected_cards;
      newState.onBoardCards = onBoardCards;
      break;
    default:
      return state;
  }

  return newState;

}

export default createStore(rootReducer);