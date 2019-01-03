import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Lobby.css";
import logo from "../moxdraft-logo-1.png";

import LobbyRow from "../LobbyRow/LobbyRow";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let n = Math.floor(Math.random() * (max - min)) + min;
  if (n % 2 == 0) {
    return n;
  } else {
    return getRandomInt(8, 14);
  }
};
export default class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      mockDrafts: []
    };
  }

  render() {
    return (
      <div className="nav-bar">
        <Link exact to="/">
          <img src={logo} />
        </Link>
        <div className="row-header d-flex table-header">
          <h4 className="w-25">Format</h4>
          <h4 className="w-25">Teams</h4>
          <h4 className="w-25">Open Slots</h4>
          <h4 className="w-25">Starts In</h4>
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
