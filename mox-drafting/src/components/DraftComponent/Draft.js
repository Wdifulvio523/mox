import React from "react";
import {Link} from "react-router-dom";
import logo from "../moxdraft-logo-1.png";
import DraftOrder from "./DraftOrder";
import playerPoolData from "../../server";
import TeamTable from "./TeamTable";
import PlayerCard from "./PlayerCard";
import CountDownTimer from "./CountDownTimer";
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
      // selection: "",
      pickSelected: false,
      draftPosition: 2,
      turn: 1,
      myTurn: false,
      round: 1,
      draftedPlayer: {}
    };
  }

  autoPick = () => {
    console.log("autopick");
    if (!this.state.playerPool.length) {
      return;
    }
    let autoPickedPlayer = this.state.playerPool.shift();
    console.log(
      `You autopicked ${autoPickedPlayer.displayName} at ${this.state.turn}`
    );
    this.state.teamPlayers.push(autoPickedPlayer);
    if (this.state.round % 2 === 1) {
      this.setState({turn: this.state.turn + 1});
    }
    if (this.state.round % 2 === 0) {
      this.setState({turn: this.state.turn - 1});
    }
  };

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
  autoDraft = () => {
    // console.log(this.state.playerPool.length);
    if (!this.state.playerPool.length) {
      return;
    }
    if (this.state.turn === 11) {
      this.setState({round: this.state.round + 1, turn: this.state.turn - 1});
    }
    if (this.state.turn === 0) {
      this.setState({round: this.state.round + 1, turn: this.state.turn + 1});
    }

    if (
      // Odd round
      // If not my turn or draft position turn
      this.state.turn !== this.state.draftPosition &&
      this.state.round % 2 === 1
    ) {
      console.log("oddRound Conditional");
      // shift first player out of playerPool Array
      const draftedPlayer = this.state.playerPool.shift();
      console.log(
        `CPU drafted: ${draftedPlayer.displayName} at ${this.state.turn}`
      );
      // Set state to turn +1 & place draftedPlayer into state
      this.setState({turn: this.state.turn + 1, draftedPlayer});
    }
    // Even round
    if (
      // If not my turn or draft position turn
      this.state.turn !== this.state.draftPosition &&
      // And round is even
      this.state.round % 2 === 0
    ) {
      console.log("evenRound Conditional");
      // shift first player out of playerPool Array
      const draftedPlayer = this.state.playerPool.shift();
      console.log(
        `CPU drafted: ${draftedPlayer.displayName} at ${this.state.turn}`
      );
      // Set state to turn +1 & place draftedPlayer into state
      this.setState({turn: this.state.turn - 1, draftedPlayer});
    }
    // End of round or beginning of round
    /* if (this.state.turn === 10 || this.state.turn === 0) {
      this.setState({round: this.state.round + 1});
      const draftedPlayer = this.state.playerPool.shift();
      console.log(
        `Round`,
        this.state.round,
        "playerpool",
        this.state.playerPool.length
      );
      // set the draftedPlayer into state
      this.setState({draftedPlayer});
    } */

    // Individual turn
    // if state.turn is equal to state.draftPosition myTurn becomes true
    if (this.state.turn === this.state.draftPosition) {
      this.setState({myTurn: true});
    }
  };

  // Toggling Selection of individual player to be drafted
  toggleSelection = (key, shift, row) => {
    let selection = [...this.state.selection];
    // let selection = this.state.selection;
    const keyIndex = selection.indexOf(key);
    if (this.state.myTurn === false) {
      return;
    }
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

  //DRAFT BUTTON METHODS
  // Toggling pick selected flag
  pickSelectedHandler = prevState => {
    this.setState({pickSelected: !prevState});
  };

  //Adds selected player (this.state.selection) to a particular team
  //Removes player from playerPool
  draftPlayer = event => {
    const draftedPlayerByUser = this.state.playerPool.filter(
      player => player.playerId === this.state.selection[0]
    );
    console.log("drafted player", draftedPlayerByUser.displayName);
    const teamPlayers = this.state.teamPlayers.concat(draftedPlayerByUser);
    const playersLeft = this.state.playerPool.filter(
      player => player.playerId !== this.state.selection[0]
    );
    if (this.state.round % 2 === 1) {
      this.setState({
        playerPool: playersLeft,
        selection: [],
        teamPlayers,
        myTurn: false,
        turn: this.state.turn + 1,
        draftedPlayer: draftedPlayerByUser[0]
      });
    }
    if (this.state.round % 2 === 0) {
      this.setState({
        playerPool: playersLeft,
        selection: [],
        teamPlayers,
        myTurn: false,
        turn: this.state.turn - 1,
        draftedPlayer: draftedPlayerByUser[0]
      });
    }
  };

  //RENDER ---------------------------------------------------------------

  render() {
    //creating table
    const {toggleSelection, isSelected, logSelection} = this;
    const columns = [
      {Header: "Player ↕", accessor: "displayName", width: 150},
      {Header: "Rank ", accessor: "overallRank", width: 80},
      {Header: "Position ", accessor: "position", width: 100},
      {Header: "Pos Rank ", accessor: "positionRank", width: 80},
      {Header: "Team ", accessor: "team", width: 80},
      {Header: "Bye ", accessor: "byeWeek", width: 80}
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
            color: selected ? "black" : "inherit"
          }
        };
      }
    };

    return (
      <div className="draft-page">
        <div className="nav-bar">
          <Link to="/">
            <img src={logo} alt="MoxDraft home" />
          </Link>
        </div>
        <div className="d-flex draft-page">
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
              draftedPlayer={this.state.draftedPlayer}
              turn={this.state.turn}
              round={this.state.round}
              autoPick={this.autoPick}
            />

            <CheckboxTable
              ref={r => (this.checkboxTable = r)}
              keyField="playerId"
              page={0}
              pageSize={this.state.playerPool.length}
              data={this.state.playerPool}
              columns={columns}
              className="-striped -highlight bg-moxred text-center"
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
      </div>
    );
  }
}

export default Draft;
