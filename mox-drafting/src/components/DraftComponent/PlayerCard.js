import React from "react";

const PlayerCard = props => {
  const selectedPlayer = props.playerPool.filter(player => {
    return player.playerId === props.selection[0];
  });
  console.log(selectedPlayer);
  return (
    <div className="player-card">
      {props.selection.length === 1 ? (
        <div>
          <div>{selectedPlayer[0].displayName} </div>
          <div>{selectedPlayer[0].position} </div>
          <div>{selectedPlayer[0].overallRank} </div>
        </div>
      ) : null}
    </div>
  );
};

export default PlayerCard;
