import React from 'react';

/**
 * cindex
 * cid
 */
function SetCard(props) {

  const imgPath = `/imgs/${props.cid}.png`;

  return (
    <div className="set-card col-4">

      <img src={imgPath} alt={"Card "+props.cid} id={"c"+props.cid}/>
      
    </div>
  )
}

export default SetCard;