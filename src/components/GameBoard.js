import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../redux/actions';

import SetCard from './SetCard';

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
  console.log("Debug Info from generateCardDeck():")
  console.log(newArr);
  return newArr;
}

const drawTilExisted = (shownCardNum) => {
  // TODO
  return shownCardNum;
}

const getCardsOnBoard = (onBoardCards) => {
  return onBoardCards.slice().map((value, key) => {
   return <SetCard key={key} cindex={key} cid={value.cid} border={value.border}/> 
  })
}

function GameBoard(props) {

  const [firstLoad, setFirstLoad] = useState(true);
  const difficulty = useSelector(state => state.difficulty);
  const dispatch = useDispatch();

  // const cardDeck = useSelector(state => state.cardDeck);
  // const shownCardNum = useSelector(state => state.shownCardNum);
  const onBoardCards = useSelector(state => state.onBoardCards);
  const inDeckCards = useSelector(state => state.inDeckCards);

  const EASY_CARD_NUM = 27;
  const NOT_EASY_CARD_NUM = 81;

  // initialization
  useEffect(() => {
    if(firstLoad){
      let shownCardNum = 12;
      let cardDeck = [];
      if(difficulty == 1)
        cardDeck = generateCardDeck(EASY_CARD_NUM)
      else
        cardDeck = generateCardDeck(NOT_EASY_CARD_NUM);
      if(difficulty == 2)
        shownCardNum = drawTilExisted(shownCardNum);
      // constonBoardCards = [...cardDeck.slice(0, shownCardNum)];
      // const inDeckCards = [...cardDeck.slice(shownCardNum)];
      setFirstLoad(false);
      dispatch(ACTIONS.initialize(cardDeck, shownCardNum));
    }
  }, [firstLoad])

  return (
    <div className="game-board">
      <div className="row">
        {getCardsOnBoard(onBoardCards)}
      </div>
    </div>
  )
}

export default GameBoard;