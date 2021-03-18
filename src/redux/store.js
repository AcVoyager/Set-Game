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

const getFeature = (cid) => {
  let features = [];
  let divisors = [81, 27, 9, 3];
  for(let div of divisors) {
    let temp = cid % div;
    let flag1 = div / 3, flag2 = flag1 * 2;
    if(temp > 0 && temp <= flag1)
      features.push(1);
    else if(temp > flag1 && temp <= flag2)
      features.push(2);
    else
      features.push(3);
  }
  return features;
}

const checkIfSet = ([c1, c2, c3]) => {
  console.log(c1, c2, c3);
  const fc1 = getFeature(c1), fc2 = getFeature(c2), fc3 = getFeature(c3);
  console.log(fc1, fc2, fc3);
  for(let i = 0; i < fc1.length; i++){
    let [f1, f2, f3] = [fc1[i], fc2[i], fc3[i]];
    console.log(f1, f2, f3);
    if(!((f1 === f2 && f1 === f3 && f2 === f3) || (f1 !== f2 && f1 !== f3 && f2 !== f3)))
      return false;
  }
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
          const border = checkIfSet(selected_cards.map((value) => onBoardCards[value].cid)) ? STATES.BORDER_SET : STATES.BORDER_NOTSET;
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