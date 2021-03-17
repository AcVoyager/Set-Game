import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../redux/actions';

import SetCard from './SetCard';

const getCardsOnBoard = (onBoardCards) => {
  return onBoardCards.slice().map((value, key) => {
   return <SetCard key={key} cindex={key} cid={value.cid} border={value.border}/> 
  })
}

function GameBoard(props) {

  const dispatch = useDispatch();

  // const cardDeck = useSelector(state => state.cardDeck);
  // const shownCardNum = useSelector(state => state.shownCardNum);
  const onBoardCards = useSelector(state => state.onBoardCards);
  const inDeckCards = useSelector(state => state.inDeckCards);

  return (
    <div className="game-board">
      <div className="row">
        {getCardsOnBoard(onBoardCards)}
      </div>
    </div>
  )
}

export default GameBoard;