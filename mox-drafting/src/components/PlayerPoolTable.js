import React from 'react';
import ReactTable from "react-table";


const PlayerPoolTable = (props) => {
    return ( 
        <div>
        {props.playerPool.Players.map(player => {
            return <div key={player.playerId}>
            {player.displayName}
            </div>
           
        })}
        </div>
     )
}
 
export default PlayerPoolTable;