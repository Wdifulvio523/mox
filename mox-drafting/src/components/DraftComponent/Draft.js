import React from "react";
import DraftOrder from "./DraftOrder";
import playerPoolData from "../../server";
import TeamTable from "./TeamTable";
import PlayerCard from "./PlayerCard";
import CountDownTimer from "./CountDownTimer";
// import Logger from "./Logger";
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
      selection: [],
      pickSelected: false,
      draftPosition: 3,
      turn: 1,
      myTurn: false,
      round: 1,
      draftedPlayer: {}
    };
  }

  //re-setting and re-rendering the state every second to show players being removed from player pool
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({playerPool: this.state.playerPool}),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //Autodrafting when it's not the user's turn
  autoDraft = prevState => {
    setInterval(prevState => {
      if (
        this.state.turn !== this.state.draftPosition &&
        this.state.round % 2 === 1
      ) {
        const draftedPlayer = this.state.playerPool.shift();
        this.setState({turn: this.state.turn + 1, draftedPlayer});
      }
      if (
        this.state.turn !== this.state.draftPosition &&
        this.state.round % 2 === 0
      ) {
        this.state.playerPool.shift();

        this.setState({turn: this.state.turn - 1});
      }
      if (this.state.turn === 10 || this.state.turn === 1) {
        this.setState({round: this.state.round + 1});

        this.state.playerPool.shift();
      }

      if (this.state.turn === this.state.draftPosition) {
        this.setState({myTurn: true});
      }
    }, 1000);
  };

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
    this.setState({selection});
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
    this.setState({pickSelected: !prevState});
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
    if (this.state.round % 2 === 1) {
      this.setState({
        playerPool: playersLeft,
        selection: [],
        teamPlayers,
        myTurn: false,
        turn: this.state.turn + 1
      });
    }
    if (this.state.round % 2 === 0) {
      this.setState({
        playerPool: playersLeft,
        selection: [],
        teamPlayers,
        myTurn: false,
        turn: this.state.turn - 1
      });
    }
  };

  //RENDER ---------------------------------------------------------------

  render() {
    //creating table
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
        const selected = this.isSelected(r.original.playerId);
        return {
          style: {
            backgroundColor: selected ? "lightgreen" : "inherit",
            color: selected ? "white" : "inherit"
          }
        };
      }
    };
    return (
      <div className="d-flex">
        <DraftOrder turn={this.state.turn} />
        <div className="draft-content d-flex flex-wrap w-100">
          <PlayerCard
            playerPool={this.state.playerPool}
            selection={this.state.selection}
            draftPlayer={this.draftPlayer}
            pickSelectedHandler={this.pickSelectedHandler}
          />

          <CountDownTimer
            pickSelected={this.state.pickSelected}
            autoDraft={this.autoDraft}
          />
          {/* <Logger draftedPlayer={this.state.draftedPlayer} /> */}
          <CheckboxTable
            ref={r => (this.checkboxTable = r)}
            keyField="playerId"
            page={0}
            pageSize={this.state.playerPool.length}
            data={this.state.playerPool}
            columns={columns}
            className="-striped -highlight bg-moxred"
            defaultPageSize={10}
            style={{height: "400px", width: "60%"}}
            {...checkboxProps}
          />

          <button
            className="btn btn-primary d-none"
            onClick={event => {
              event.preventDefault();
              this.pickSelectedHandler();
              this.draftPlayer();
            }}
          >
            DRAFT PLAYER
          </button>

          <TeamTable teamPlayers={this.state.teamPlayers} />
        </div>
      </div>
    );
  }
}

export default Draft;
