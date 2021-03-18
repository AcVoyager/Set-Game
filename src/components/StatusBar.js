import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../redux/actions';

const posfix = {
  1: "st", 2: "nd", 3:"rd"
}

const getBarText = (isSet, arrLength) => {
  if(arrLength < 3) {
    return `Please select the ${arrLength+1} ${posfix[arrLength+1]} card.`;
  }
  else if(isSet) {
    return "Congratulation! Please click the button to continue.";
  }
  else{
    return "Sorry, it's not a set.";
  }

}

function StatusBar(props) {

  const isSet = useSelector(state => state.isSet);
  const selected_cards = useSelector(state => state.selected_cards);
  const dispatch = useDispatch();

  return (
    <div className="status-bar mt-3">

      <div className="row text-center d-flex">
        <h3>{getBarText(isSet, selected_cards.length)}</h3>

        {
          isSet? 
          <div className="my-2">
            <button type="button" class="btn btn-outline-primary"
              onClick={() => dispatch(ACTIONS.discard())}>
              Discard the set
            </button>
          </div> : null
        }
      </div>
      
    </div>
  )
}

export default StatusBar;