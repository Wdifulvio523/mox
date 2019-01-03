import React from "react";
import playerPoolData from "../../server";
import TeamTable from "./TeamTable";
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import "react-table/react-table.css";
import "./Draft.css";

const CheckboxTable = checkboxHOC(ReactTable);

class Draft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPool: playerPoolData.DraftRankings,
      teamPlayers: [],
      selection: []
    };
  }

  toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({selection});
  };

  isSelected = key => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */

    return this.state.selection.includes(key);
  };

  logSelection = () => {
    console.log("selection:", this.state.selection);
  };

  draftPlayer = event => {
    const draftedPlayer = this.state.playerPool.filter(
      player => player.playerId === this.state.selection[0]
    );
    const teamPlayers = this.state.teamPlayers.concat(draftedPlayer);
    this.setState({teamPlayers});
  };

  filterPlayerPool = event => {
    const playersLeft = this.state.playerPool.filter(
      player => player.playerId !== this.state.selection[0]
    );
    this.setState({playerPool: playersLeft, selection: []});
  };

  render() {
    const {toggleSelection, isSelected, logSelection} = this;
    const columns = [
      {Header: "Player", accessor: "displayName", width: 150},
      {Header: "Rank", accessor: "overallRank", width: 50},
      {Header: "Position", accessor: "position", width: 50},
      {Header: "Pos Rank", accessor: "positionRank", width: 50},
      {Header: "Team", accessor: "team", width: 50},
      {Header: "Bye", accessor: "byeWeek", width: 50}
    ];

    const checkboxProps = {
      isSelected,
      toggleSelection,
      selectType: "checkbox",
      getTrProps: (s, r) => {
        // someone asked for an example of a background color change
        // here it is...
        const selected = this.isSelected(r.original.playerId);
        return {
          style: {
            backgroundColor: selected ? "lightgreen" : "inherit"
            // color: selected ? 'white' : 'inherit',
          }
        };
      }
    };

    return (
      <div>
        <div className="player-pool">
          <CheckboxTable
            ref={r => (this.checkboxTable = r)}
            keyField="playerId"
            page={0}
            pageSize={this.state.playerPool.length}
            data={this.state.playerPool}
            columns={columns}
            className="-striped -highlight bg-moxred"
            defaultPageSize={10}
            style={{height: "400px", width: "70%"}}
            {...checkboxProps}
          />
          <button
            className="btn btn-primary"
            onClick={event => {
              event.preventDefault();
              this.draftPlayer();
              this.filterPlayerPool();
            }}
          >
            DRAFT PLAYER
          </button>
        </div>
        <div className="drafted-players">
          <TeamTable teamPlayers={this.state.teamPlayers} />
        </div>
      </div>
    );
  }
}

export default Draft;
