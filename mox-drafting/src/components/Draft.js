import React from "react";
import axios from "axios";
import playerPoolData from "../server";
import PlayerPoolTable from "./PlayerPoolTable";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Draft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPool: playerPoolData
    };
  }



  render() {
    const columns = [
      { Header: "Player", accessor: "displayName" },
      { Header: "Position", accessor: "position" },
      { Header: "Team", accessor: "team" }
    ];
    return (
      <div>
        <ReactTable
          data={this.state.playerPool.DraftRankings}
          columns={columns}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default Draft;
