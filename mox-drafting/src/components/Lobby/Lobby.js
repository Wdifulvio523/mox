import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Lobby.css";
import logo from "../moxdraft-logo-1.png";

import LobbyRow from "../LobbyRow/LobbyRow";

export default class Lobby extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="nav-bar">
        <Link exact to="/">
          <img src={logo} />
        </Link>
        <div className="row-header d-flex table-header">
          <h3 className="w-25">Format</h3>
          <h3 className="w-25">Teams</h3>
          <h3 className="w-25">Open Slots</h3>
          <h3 className="w-25">Starts In</h3>
        </div>
        <div className="table-rows">
          <LobbyRow />
          <LobbyRow />
          <LobbyRow />
          <LobbyRow />
        </div>
      </div>
    );
  }
}
