import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Lobby.css";
import logo from "../moxdraft-logo-1.png";

import LobbyRow from "../LobbyRow/LobbyRow";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let n = Math.floor(Math.random() * (max - min)) + min;
  if (n % 2 === 0) {
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
      <div>
        <div className="nav-bar">
          <Link exact to="/">
            <img src={logo} alt="MoxDraft logo" />
          </Link>
        </div>
        <table class="table"> 
          <thead>
            <tr>
              <th scope="col"> <h4 className="">Format</h4></th>
              <th scope="col"><h4 className="">Teams</h4></th>
              <th scope="col"><h4 className="">Open Slots</h4></th>
              <th scope="col"><h4 className="">Starts In</h4></th>
            </tr>
          </thead>
          <tbody>
            <LobbyRow />
            <LobbyRow />
            <LobbyRow />
            <LobbyRow />
          </tbody>
        </table>
      </div>
    );
  }
}
