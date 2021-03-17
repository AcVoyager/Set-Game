import React from 'react';

/**
 * cindex
 * cid
 */
function SetCard(props) {

  const imgPath = `/imgs/${props.cid}.png`;

  return (
    <div className="col-3 d-flex justify-content-center aligh-item-center my-3">
      <div className="set-card">
        <img src={imgPath} alt={"Card "+props.cid} id={"c"+props.cid}/>
      </div>
    </div>
  )
}

export default SetCard;