import React from "react";
import "./Draft.css";

const PlayerCard = props => {
  const selectedPlayer = props.playerPool.filter(player => {
    return player.playerId === props.selection[0];
  });
  // console.log(selectedPlayer);

  return (
    <div className="player-card d-flex ">
      <section className="container-fluid">
        <div className="row">
          <div className="col-6  bg-dark   player-stats">player stats</div>
          <div className="col-6  bg-dkgray   team-logo">team logo</div>
        </div>

        
          {props.selection.length === 1 ? (
            <div className="d-flex  justify-content-around  align-items-end   player-info">
              <div className="d-flex align-items-end w-100">
              <div
                  className="btn btn-sm btn-primary  w-100"
                  onClick={() => {
                    props.pickSelectedHandler();
                    props.draftPlayer();
                  }}
                >
                  DRAFT
                </div>
                <div className="d-flex justify-content-around w-100 bg-black">
                  <div>{selectedPlayer[0].overallRank} </div>
                  <div>{selectedPlayer[0].displayName} </div>
                  <div>{selectedPlayer[0].position} </div>
                </div>

                
              </div>
            </div>
          ) : (
            <div className="d-flex  justify-content-around  align-items-end   player-info ">
              <div className="d-flex  w-100">
                <h4 className="text-uppercase  text-center  bg-black  w-100">
                  Select 1 player
                </h4>
              </div>
            </div>
          )}

      </section>
    </div>
  );
};

export default PlayerCard;
