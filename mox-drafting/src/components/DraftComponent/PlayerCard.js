import React from "react";
import './Draft.css';


const PlayerCard = props => {
  const selectedPlayer = props.playerPool.filter(player => {
    return player.playerId === props.selection[0];
  });
  console.log(selectedPlayer);
  
  return (
    <div className="player-card d-flex ">
      {props.selection.length === 1 ? (
        <div className="d-flex justify-content-around align-items-end w-100 mb-2">
          <div>{selectedPlayer[0].displayName} </div>
          <div>{selectedPlayer[0].position} </div>
          <div>{selectedPlayer[0].overallRank} </div>
          <div className="btn btn-sm btn-primary w-25">Draft</div>
        </div>
      ) : null}
    </div>
  );
};

export default PlayerCard;
