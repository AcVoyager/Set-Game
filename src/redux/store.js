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

//ref: https://stackoverflow.com/a/2450976/9045814
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const generateCardDeck = (num) => {
  // ref: https://stackoverflow.com/a/10050831/9045814
  let newArr = [...Array(num).keys()].map(i => i+1);
  newArr = shuffle(newArr);
  // console.log("Debug Info from generateCardDeck():")
  // console.log(newArr);
  return newArr;
}

const drawTilExisted = (shownCardNum) => {
  // TODO
  return shownCardNum;
}

const checkIfSet = (c1, c2, c3) => {
  //  TODO
  return true;
}

const rootReducer = (state=INITIAL_STATE, action) => {

  let newState = {...state};
  switch (action.type) {
    case ACTION_TYPES.CHANGE_STATE:
      newState.appState = action.payload.nextState;
      if(newState.appState === STATES.GAME){
        let shownCardNum = STATES.START_CARDS_NUM;
        let cardDeck = [];
        if(newState.difficulty == 1)
          cardDeck = generateCardDeck(STATES.EASY_CARD_NUM)
        else
          cardDeck = generateCardDeck(STATES.NOT_EASY_CARD_NUM);
        if(newState.difficulty == 2)
          shownCardNum = drawTilExisted(shownCardNum);
        newState.cardDeck = cardDeck;
        newState.shownCardNum = shownCardNum;
        newState.onBoardCards = newState.cardDeck.slice(0, newState.shownCardNum).map(
          (value) => ({cid: value, border: null})
        );
        newState.inDeckCards = newState.cardDeck.slice(newState.shownCardNum);
      }
      break;
    case ACTION_TYPES.SET_DIFF:
      newState.difficulty = action.payload.difficulty;
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
      // console.log(selected_cards);
      newState.selected_cards = selected_cards;
      newState.onBoardCards = onBoardCards;
      break;
    default:
      return state;
  }

  return newState;

}

export default createStore(rootReducer);