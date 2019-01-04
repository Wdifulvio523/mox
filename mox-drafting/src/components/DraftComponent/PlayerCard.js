import React from "react";
import "./Draft.css";
import "./team-colors.css";
import {teamArray} from "../../server";
import nfl from "./team-logos/nfl.gif";

const PlayerCard = props => {
  const selectedPlayer = props.playerPool.filter(player => {
    return player.playerId === props.selection[0];
  });
  // console.log(selectedPlayer);
  const selectedPlayersTeam = props.logoArray.filter(player => {
    if (selectedPlayer.length === 0) return;
    return player.team === selectedPlayer[0].team;
  });
  console.log(selectedPlayersTeam);
  return (
    <div className="player-card d-flex ">
      <section className="container-fluid">
        <div className="row">
          <div className="col-6  bg-dark   player-stats">player stats</div>
          <div className="col-6  bg-dkgray   team-logo">
            <img
              className="h-100 w-100"
              src={
                selectedPlayersTeam.length === 0
                  ? `${nfl}`
                  : `${selectedPlayersTeam[0].file}`
              }
              alt="team-logo"
            />
          </div>
        </div>

        {props.selection.length < 2 ? (
          <div className="d-flex player-info">
            <div className="d-flex align-items-end w-100">
              {props.myTurn === true ? (
                <div
                  className="btn btn-sm btn-primary  w-100 draft-btn"
                  onClick={() => {
                    props.pickSelectedHandler();
                    props.draftPlayer();
                  }}
                >
                  DRAFT
                </div>
              ) : null}
              <div
                className={`d-flex w-100 selected-player ${
                  selectedPlayersTeam.length === 0
                    ? ""
                    : selectedPlayersTeam[0].team
                }`}
              >
                {selectedPlayer.length !== 0 ? (
                  <div>
                    {/* <div>{selectedPlayer[0].overallRank} </div> */}
                    <span>{selectedPlayer[0].displayName} </span>
                    <span>{selectedPlayer[0].position} </span>
                  </div>
                ) : null}
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
