import React from "react";
import playerPoolData from "../../server";
import TeamTable from "./TeamTable";
import PlayerCard from "./PlayerCard";
import CountDownTimer from "./CountDownTimer";
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import "react-table/react-table.css";

const CheckboxTable = checkboxHOC(ReactTable);

class Draft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPool: playerPoolData.DraftRankings,
      teamPlayers: [],
      selection: [],
      pickSelected: false,
    };
  }

  // Toggling Selection of individual player to be drafted
  toggleSelection = (key, shift, row) => {
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    if (keyIndex >= 0) {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      selection.push(key);
    }
    this.setState({ selection });
  };

  //Checking if a player's row is Selected
  isSelected = key => {
    return this.state.selection.includes(key);
  };

  //log selection to console -- Not used
  logSelection = () => {
    console.log("selection:", this.state.selection);
  };

  //DRAFT BUTTON METHODS
  // Toggling pick selected flag
  pickSelectedHandler = prevState => {
    this.setState({ pickSelected: !prevState });
  };


  //Adds selected player (this.state.selection) to a particular team
  //Removes player from playerPool
  draftPlayer = event => {
    const draftedPlayer = this.state.playerPool.filter(
      player => player.playerId === this.state.selection[0]
    );
    const teamPlayers = this.state.teamPlayers.concat(draftedPlayer);
    const playersLeft = this.state.playerPool.filter(
      player => player.playerId !== this.state.selection[0]
    );
    this.setState({ playerPool: playersLeft, selection: [], teamPlayers });
  };

  //RENDER ---------------------------------------------------------------

  render() {
    //creating table
    const { toggleSelection, isSelected, logSelection } = this;
    const columns = [
      { Header: "Player", accessor: "displayName", width: 150 },
      { Header: "Rank", accessor: "overallRank", width: 50 },
      { Header: "Position", accessor: "position", width: 50 },
      { Header: "Pos Rank", accessor: "positionRank", width: 50 },
      { Header: "Team", accessor: "team", width: 50 },
      { Header: "Bye", accessor: "byeWeek", width: 50 }
    ];

    const checkboxProps = {
      isSelected,
      toggleSelection,
      selectType: "checkbox",
      getTrProps: (s, r) => {
        const selected = this.isSelected(r.original.playerId);
        return {
          style: {
            backgroundColor: selected ? "lightgreen" : "inherit",
            color: selected ? "white" : "inherit"
          }
        };
      }
    };
console.log('render?')
    return (
      <div>
        <PlayerCard
          playerPool={this.state.playerPool}
          selection={this.state.selection}
        />

        <CountDownTimer pickSelected={this.state.pickSelected} />

        <CheckboxTable
          ref={r => (this.checkboxTable = r)}
          keyField="playerId"
          page={0}
          pageSize={this.state.playerPool.length}
          data={this.state.playerPool}
          columns={columns}
          className="-striped -highlight"
          defaultPageSize={10}
          style={{ height: "400px", width: "80%" }}
          {...checkboxProps}
        />

        <button
          onClick={event => {
            event.preventDefault();
            this.pickSelectedHandler();
            this.draftPlayer();
            // this.filterPlayerPool();
          }}
        >
          DRAFT PLAYER
        </button>

        <TeamTable teamPlayers={this.state.teamPlayers} />
      </div>
    );
  }
}

export default Draft;
