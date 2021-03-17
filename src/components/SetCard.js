import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/actions';


const getBorder = (border) => {

  if(border == null)
    return 'None';
  else
    return border;

}

/**
 * cindex
 * cid
 */

function SetCard(props) {

  const imgPath = `/imgs/${props.cid}.png`;
  const dispatch = useDispatch();

  return (
    <div className="col-3 d-flex justify-content-center aligh-item-center my-3">
      <div className="set-card" style={{border: getBorder(props.border)}} 
        onClick={() => dispatch(ACTIONS.clickCard(props.cindex, props.cid))}>
        <img src={imgPath} alt={"Card "+props.cid} id={"c"+props.cid}/>
      </div>
    </div>
  )
}

export default SetCard;